import { getExportConditions, type SkipTheBuildConfig } from 'skip-the-build';
import { mergeConfig, type UserConfig } from 'vite';

const getViteConfig = async (skipTheBuildConfig: SkipTheBuildConfig): Promise<UserConfig> => {
  const exportConditions = await getExportConditions(skipTheBuildConfig);
  return {
    resolve: {
      conditions: exportConditions,
    },
  };
};

const withSkipTheBuild = async (
  skipTheBuildConfig: SkipTheBuildConfig,
  baseViteConfig: UserConfig,
): Promise<UserConfig> => {
  const skipTheBuildViteConfig = await getViteConfig(skipTheBuildConfig);
  return mergeConfig(skipTheBuildViteConfig, baseViteConfig);
};

export { getExportConditions, getViteConfig, withSkipTheBuild };
