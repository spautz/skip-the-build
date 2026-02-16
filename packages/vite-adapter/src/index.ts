import { getExportConditions, type SkipTheBuildConfig } from 'skip-the-build';
import { mergeConfig, type UserConfig } from 'vite';

const getViteConfig = async (skipTheBuildConfig: SkipTheBuildConfig): Promise<UserConfig> => {
  const exportConditions = await getExportConditions(skipTheBuildConfig);
  if (exportConditions.length) {
    return {
      resolve: {
        conditions: exportConditions,
      },
      ssr: {
        resolve: {
          conditions: exportConditions,
        },
      },
      environments: {
        client: {
          resolve: {
            conditions: exportConditions,
          },
        },
        ssr: {
          resolve: {
            conditions: exportConditions,
          },
        },
      },
    };
  }
  // Nothing to do. (It's somewhat cleaner to use an empty object when logging/debugging,
  // instead of having a bunch of nested empty arrays)
  return {};
};

const withSkipTheBuild = async (
  skipTheBuildConfig: SkipTheBuildConfig,
  baseViteConfig: UserConfig,
): Promise<UserConfig> => {
  const skipTheBuildViteConfig = await getViteConfig(skipTheBuildConfig);
  return mergeConfig(skipTheBuildViteConfig, baseViteConfig);
};

export { getExportConditions, getViteConfig, withSkipTheBuild };
