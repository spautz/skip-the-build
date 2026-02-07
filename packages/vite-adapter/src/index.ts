import { getExportConditions, type SkipTheBuildConfig } from 'skip-the-build';
import { mergeConfig, type UserConfig } from 'vite';

const internal_createViteConfigForExportConditions = (
  exportConditions: Array<string>,
): UserConfig => {
  return {
    resolve: {
      conditions: exportConditions,
    },
  };
};

const getViteConfig = async (skipTheBuildConfig: SkipTheBuildConfig): Promise<UserConfig> => {
  const resolveConditions = await getExportConditions(skipTheBuildConfig);
  return internal_createViteConfigForExportConditions(resolveConditions);
};

const withSkipTheBuild = async (
  skipTheBuildConfig: SkipTheBuildConfig,
  baseViteConfig: UserConfig,
): Promise<UserConfig> => {
  const skipTheBuildViteConfig = await getViteConfig(skipTheBuildConfig);
  return mergeConfig(skipTheBuildViteConfig, baseViteConfig);
};

export { getExportConditions, getViteConfig, withSkipTheBuild };
