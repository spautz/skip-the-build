import type { SkipTheBuildConfig } from '../configSchema.ts';
import { envVarIsEnabled, isCI, isDevelopmentMode } from '../rules/environmentRules.ts';
import { isGitBranch } from '../rules/gitRules.ts';
import { hasInteractiveTTY } from '../rules/processRules.ts';

const alwaysSkipPreset = {
  skipWhen: [true],
} satisfies Partial<SkipTheBuildConfig>;

const neverSkipPreset = {
  neverSkipWhen: [true],
} satisfies Partial<SkipTheBuildConfig>;

const defaultPreset = {
  skipWhen: [hasInteractiveTTY],
  neverSkipWhen: [isCI, isGitBranch('main')],
} satisfies Partial<SkipTheBuildConfig>;

const devModeOnlyPreset = {
  skipWhen: [isDevelopmentMode],
  neverSkipWhen: [isCI],
} satisfies Partial<SkipTheBuildConfig>;

const envVarOnlyPreset = {
  skipWhen: [envVarIsEnabled('SKIP_THE_BUILD')],
} satisfies Partial<SkipTheBuildConfig>;

const presets = {
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
