import {
  type Internal_Rule,
  internal_configSchema,
  type SkipTheBuildConfig,
} from './configSchema.ts';

// Simple local cache to avoid re-parsing the config repeatedly
let lastRawConfig: SkipTheBuildConfig;
let lastParsedConfig: SkipTheBuildConfig;
let lastConfigPassed: boolean;

// @TODO: future expansion: V1, V2, etc
const internal_parseConfig = (rawConfig: SkipTheBuildConfig): SkipTheBuildConfig => {
  if (rawConfig !== lastRawConfig) {
    lastRawConfig = rawConfig;
    lastParsedConfig = internal_configSchema.parse(rawConfig);
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
    const { skipWhen, neverSkipWhen } = internal_parseConfig(rawConfig);

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
    lastConfigPassed = passed;
  }

  return lastConfigPassed;
};

const getResolveConditions = async (rawConfig: SkipTheBuildConfig): Promise<Array<string>> => {
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

export { internal_parseConfig, internal_evaluateRule, evaluateConfig, getResolveConditions };
