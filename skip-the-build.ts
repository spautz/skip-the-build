import { presets, type SkipTheBuildConfig, type SkipTheBuildConfigObject } from 'skip-the-build';

const defineSkipTheBuildConfig = <ConfigType extends SkipTheBuildConfig>(
  config: ConfigType,
): ConfigType => config;

const skipTheBuildConfig: SkipTheBuildConfigObject = defineSkipTheBuildConfig({
  // For this local demo we only look at the SKIP_THE_BUILD env var
  extend: presets.envVarOnly,
  settings: {
    exportConditionName: 'local-dev',
  },
});

export default skipTheBuildConfig;
