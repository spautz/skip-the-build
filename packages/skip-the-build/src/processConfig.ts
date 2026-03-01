import {
  type Internal_Rule,
  internal_configSchema,
  internal_partialConfigSchema,
  type SkipTheBuildConfig,
  type SkipTheBuildConfigPartialObject,
  type SkipTheBuildResolvedConfig,
} from './configSchema.ts';
import { deepMerge, isPlainObject, resolveFnOrPromise } from './utils.ts';

// Parsing applies any base configs
type ParsedConfig = SkipTheBuildResolvedConfig;
type PartialParsedConfig = Partial<ParsedConfig>;

// Simple local cache to avoid re-parsing the config repeatedly
let lastRawConfig: SkipTheBuildConfig;
let lastParsedConfig: ParsedConfig;
let lastConfigDidSkip: boolean;

const internal_validatePartialConfig = (
  config: SkipTheBuildConfigPartialObject,
  label: string,
): SkipTheBuildConfigPartialObject => {
  const result = internal_partialConfigSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`${label} failed validation.`, { cause: result.error });
  }
  return result.data;
};

const internal_validateResolvedConfig = (config: ParsedConfig, label: string): ParsedConfig => {
  const result = internal_configSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`${label} failed validation.`, { cause: result.error });
  }
  return result.data;
};

const internal_resolveConfigValue = async (
  config: SkipTheBuildConfig,
  label: string,
  shouldValidate: boolean,
): Promise<SkipTheBuildConfigPartialObject> => {
  const resolvedConfig = await resolveFnOrPromise(config);
  if (!isPlainObject(resolvedConfig)) {
    throw new Error(`${label} must resolve to an object.`);
  }
  const resolvedObject = resolvedConfig as SkipTheBuildConfigPartialObject;
  return shouldValidate ? internal_validatePartialConfig(resolvedObject, label) : resolvedObject;
};

const internal_applyExtendsToConfig = async (
  config: SkipTheBuildConfigPartialObject,
  shouldValidate: boolean,
): Promise<PartialParsedConfig> => {
  const { extend, ...otherFields } = config;
  const configsToMerge: Array<PartialParsedConfig> = [];

  if (extend) {
    const extendedConfigs = Array.isArray(extend) ? extend : [extend];
    for (let index = 0; index < extendedConfigs.length; index += 1) {
      const label = `Extended config (${index + 1})`;
      const resolvedExtend = await internal_resolveConfigValue(
        extendedConfigs[index],
        label,
        shouldValidate,
      );
      // Recurse in case the extended config extend other configs
      configsToMerge.push(await internal_applyExtendsToConfig(resolvedExtend, shouldValidate));
    }
  }

  configsToMerge.push({ ...otherFields });
  return configsToMerge.reduce<PartialParsedConfig>((acc, configToMerge) => {
    return deepMerge(acc, configToMerge);
  }, {} as PartialParsedConfig);
};

// @TODO: future expansion: V1, V2, etc
const internal_parseConfig = async (rawConfig: SkipTheBuildConfig): Promise<ParsedConfig> => {
  if (rawConfig !== lastRawConfig) {
    const resolvedRoot = await internal_resolveConfigValue(rawConfig, 'User config', false);
    const shouldValidate = resolvedRoot.settings?.validateConfig ?? true;
    const validatedRoot = shouldValidate
      ? internal_validatePartialConfig(resolvedRoot, 'User config')
      : resolvedRoot;

    // Then apply any `extend`ed configs, recursively
    const parsedConfig = await internal_applyExtendsToConfig(validatedRoot, shouldValidate);
    const finalConfig = shouldValidate
      ? internal_validateResolvedConfig(parsedConfig as ParsedConfig, 'Resolved config')
      : (parsedConfig as ParsedConfig);

    lastRawConfig = rawConfig;
    lastParsedConfig = finalConfig;
  }
  return lastParsedConfig;
};

const internal_evaluateRule = async (rule: Internal_Rule): Promise<boolean> => {
  if (rule instanceof Promise) {
    // @ts-expect-error Circular reference (by design)
    return internal_evaluateRule(await rule);
  }
  if (typeof rule === 'function') {
    return internal_evaluateRule(rule());
  }
  // if (typeof rule !== 'boolean') {
  //   // @TODO: warning
  // }

  return rule;
};

const evaluateConfig = async (rawConfig: SkipTheBuildConfig): Promise<boolean> => {
  if (rawConfig !== lastRawConfig) {
    const { skipWhen, neverSkipWhen } = await internal_parseConfig(rawConfig);

    let passed = true;
    if (skipWhen) {
      // Proceed if any are true
      passed = false;
      for (const rule of skipWhen) {
        // Rules should all be very very fast -- more overhead to *start* a rule than to run it --
        // so we'll just await in turn. Parallelizing would be more wasteful than it's worth here.
        if (await internal_evaluateRule(rule)) {
          passed = true;
          break;
        }
      }
    }

    if (passed && neverSkipWhen) {
      // Halt if any are true
      for (const rule of neverSkipWhen) {
        if (await internal_evaluateRule(rule)) {
          passed = false;
          break;
        }
      }
    }
    lastRawConfig = rawConfig;
    lastConfigDidSkip = passed;
  }

  return lastConfigDidSkip;
};

const getExportConditions = async (rawConfig: SkipTheBuildConfig): Promise<Array<string>> => {
  if (await evaluateConfig(rawConfig)) {
    const parsedConfig = await internal_parseConfig(rawConfig);
    const { exportConditionName } = parsedConfig.settings;

    if (Array.isArray(exportConditionName)) {
      return exportConditionName;
    }
    if (exportConditionName) {
      return [exportConditionName];
    }
  }
  return [];
};

export { internal_parseConfig, internal_evaluateRule, evaluateConfig, getExportConditions };
