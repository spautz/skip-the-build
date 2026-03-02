import {
  type Internal_FinalConfig,
  type Internal_PartialConfig,
  type Internal_Rule,
  internal_finalConfigSchema,
  internal_partialConfigSchema,
  type SkipTheBuildConfig,
  type SkipTheBuildConfigObject,
} from './configSchema.ts';
import { deepMerge, isPlainObject, resolveFnOrPromise } from './utils.ts';

// Simple local cache to avoid re-parsing the config repeatedly
let lastRawConfig: SkipTheBuildConfig;
let lastFinalConfig: Internal_FinalConfig;
let lastConfigDidSkip: boolean;

const internal_validatePartialConfig = (config: unknown, label: string): Internal_PartialConfig => {
  const result = internal_partialConfigSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`${label} failed validation.`, { cause: result.error });
  }
  return result.data;
};

const internal_validateFinalConfig = (config: unknown, label: string): Internal_FinalConfig => {
  const result = internal_finalConfigSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`${label} failed validation.`, { cause: result.error });
  }
  return result.data;
};

const internal_resolveConfigValue = async (
  config: SkipTheBuildConfig,
  label: string,
  shouldValidate: boolean,
): Promise<SkipTheBuildConfigObject> => {
  const resolvedConfig = await resolveFnOrPromise(config);
  if (!isPlainObject(resolvedConfig)) {
    throw new Error(`${label} must resolve to an object.`);
  }
  const resolvedObject = resolvedConfig as SkipTheBuildConfigObject;
  return shouldValidate ? internal_validatePartialConfig(resolvedObject, label) : resolvedObject;
};

const internal_applyExtendsToConfig = async (
  config: Internal_PartialConfig,
  shouldValidate: boolean,
): Promise<Internal_PartialConfig> => {
  const { extend, ...otherFields } = config;
  const configsToMerge: Array<Internal_PartialConfig> = [];

  if (extend) {
    const extendedConfigs = Array.isArray(extend) ? extend : [extend];
    for (let index = 0; index < extendedConfigs.length; index += 1) {
      const label = `Extended config (${index + 1})`;
      const resolvedExtend = await internal_resolveConfigValue(
        extendedConfigs[index] as SkipTheBuildConfig,
        label,
        shouldValidate,
      );
      // Recurse in case the extended config extend other configs
      configsToMerge.push(await internal_applyExtendsToConfig(resolvedExtend, shouldValidate));
    }
  }

  configsToMerge.push({ ...otherFields });
  return configsToMerge.reduce<Internal_PartialConfig>((acc, configToMerge) => {
    return deepMerge(acc, configToMerge);
  }, {});
};

// @TODO: future expansion: V1, V2, etc
const internal_parseConfig = async (
  rawConfig: SkipTheBuildConfig,
): Promise<Internal_FinalConfig> => {
  if (rawConfig !== lastRawConfig) {
    const resolvedRoot = await internal_resolveConfigValue(rawConfig, 'User config', false);
    const shouldValidate = resolvedRoot.settings?.validateConfig ?? true;
    const validatedRoot = shouldValidate
      ? internal_validatePartialConfig(resolvedRoot, 'User config')
      : resolvedRoot;

    // Then apply any `extend`ed configs, recursively
    const parsedConfig = await internal_applyExtendsToConfig(validatedRoot, shouldValidate);
    const finalConfig = shouldValidate
      ? internal_validateFinalConfig(parsedConfig, 'Resolved config')
      : (parsedConfig as Internal_FinalConfig);

    lastRawConfig = rawConfig;
    lastFinalConfig = finalConfig;
  }
  return lastFinalConfig;
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
