import { internal_configSchema, type SkipTheBuildConfig } from './config.ts';

// Simple local cache to avoid re-parsing the config repeatedly
let lastRawConfig: SkipTheBuildConfig;
let lastParsedConfig: SkipTheBuildConfig;

// @TODO: future expansion: V1, V2, etc
const internal_parseConfig = (rawConfig: SkipTheBuildConfig): SkipTheBuildConfig => {
  if (rawConfig !== lastRawConfig) {
    lastRawConfig = rawConfig;
    lastParsedConfig = internal_configSchema.parse(rawConfig);
  }
  return lastParsedConfig;
};

// This is async because future checks will be
const evaluateConfig = async (rawConfig: SkipTheBuildConfig): Promise<boolean> => {
  const parsedConfig = internal_parseConfig(rawConfig);

  // @TODO: proper evaluation of env and branch names
  return parsedConfig.whenToSkip.default;
};

const getResolveConditions = async (rawConfig: SkipTheBuildConfig): Promise<Array<string>> => {
  if (await evaluateConfig(rawConfig)) {
    const parsedConfig = internal_parseConfig(rawConfig);
    const { importConditionName } = parsedConfig.settings;

    if (Array.isArray(importConditionName)) {
      return importConditionName;
    }
    if (importConditionName) {
      return [importConditionName];
    }
  }
  return [];
};

export { internal_parseConfig, evaluateConfig, getResolveConditions };
