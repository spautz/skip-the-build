import {
  type Internal_Rule,
  internal_configSchema,
  type SkipTheBuildConfig,
} from './configSchema.ts';
import { deepMerge, resolveFnOrPromise } from './utils.ts';

// Parsing applies any base configs
type ParsedConfig = Omit<SkipTheBuildConfig, 'extend'>;

// Simple local cache to avoid re-parsing the config repeatedly
let lastRawConfig: SkipTheBuildConfig;
let lastParsedConfig: ParsedConfig;
let lastConfigDidSkip: boolean;

const internal_applyExtendsToConfig = (config: SkipTheBuildConfig): ParsedConfig => {
  const { extend, ...otherFields } = config;

  if (extend) {
    const allConfigsToMerge = [...(Array.isArray(extend) ? extend : [extend]), { ...otherFields }];
    const parsedConfig = allConfigsToMerge.reduce<ParsedConfig>((acc, configToMerge) => {
      // Recurse in case the extended config extend other configs
      return deepMerge(acc, internal_applyExtendsToConfig(configToMerge as SkipTheBuildConfig));
    }, {} as ParsedConfig);

    return parsedConfig;
  }
  // else: nothing to do
  return { ...otherFields };
};

// @TODO: future expansion: V1, V2, etc
const internal_parseConfig = (rawConfig: SkipTheBuildConfig): ParsedConfig => {
  if (rawConfig !== lastRawConfig) {
    // First make sure it's valid
    const shouldValidate = rawConfig.settings?.validateConfig ?? true;
    const validatedConfig = shouldValidate
      ? (internal_configSchema.parse(rawConfig) as SkipTheBuildConfig)
      : rawConfig;

    // Then apply any `extend`ed configs, recursively
    const parsedConfig = internal_applyExtendsToConfig(validatedConfig);

    lastRawConfig = rawConfig;
    lastParsedConfig = parsedConfig;
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
    const { skipWhen, neverSkipWhen } = internal_parseConfig(await resolveFnOrPromise(rawConfig));

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
    const parsedConfig = internal_parseConfig(rawConfig);
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
