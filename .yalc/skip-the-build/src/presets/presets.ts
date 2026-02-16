import { envVarIsEnabled, isCI, isDevelopmentMode } from '../rules/environmentRules.ts';

const defaultPreset = {
  neverSkipWhen: [isCI],
};

const devModeOnlyPreset = {
  skipWhen: [isDevelopmentMode],
  neverSkipWhen: [isCI],
};

const envVarOnlyPreset = {
  skipWhen: [envVarIsEnabled('SKIP_THE_BUILD')],
};

const presets = {
  default: defaultPreset,
  devModeOnly: devModeOnlyPreset,
  envVarOnly: envVarOnlyPreset,
};

export { defaultPreset, devModeOnlyPreset, envVarOnlyPreset, presets };
