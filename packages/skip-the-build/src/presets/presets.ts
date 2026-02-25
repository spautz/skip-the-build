import type { SkipTheBuildConfigObject } from '../configSchema.ts';
import { envVarIsEnabled, isCI, isDevelopmentMode } from '../rules/environmentRules.ts';
import { isGitBranch } from '../rules/gitRules.ts';
import { hasInteractiveTTY } from '../rules/processRules.ts';

type SkipTheBuildPreset = Partial<SkipTheBuildConfigObject>;

const alwaysSkipPreset: SkipTheBuildPreset = {
  skipWhen: [true],
};

const neverSkipPreset: SkipTheBuildPreset = {
  neverSkipWhen: [true],
};

const defaultPreset: SkipTheBuildPreset = {
  skipWhen: [hasInteractiveTTY],
  neverSkipWhen: [isCI, isGitBranch('main')],
};

const devModeOnlyPreset: SkipTheBuildPreset = {
  skipWhen: [isDevelopmentMode],
  neverSkipWhen: [isCI],
};

const envVarOnlyPreset: SkipTheBuildPreset = {
  skipWhen: [envVarIsEnabled('SKIP_THE_BUILD')],
};

type PresetName = 'alwaysSkip' | 'default' | 'devModeOnly' | 'envVarOnly' | 'neverSkip';

const presets: Record<PresetName, SkipTheBuildPreset> = {
  alwaysSkip: alwaysSkipPreset,
  default: defaultPreset,
  devModeOnly: devModeOnlyPreset,
  envVarOnly: envVarOnlyPreset,
  neverSkip: neverSkipPreset,
};

export {
  alwaysSkipPreset,
  defaultPreset,
  devModeOnlyPreset,
  envVarOnlyPreset,
  neverSkipPreset,
  presets,
};
