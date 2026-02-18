import { getExportConditions, resolveFnOrPromise, type SkipTheBuildConfig } from 'skip-the-build';
import { type ConfigEnv, mergeConfig, type UserConfig, type UserConfigExport } from 'vite';

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
  // instead of returning a config with a bunch of nested empty arrays)
  return {};
};

/**
 * Returns an async function that returns the merged Vite config.
 *
 * Returning a function instead of a promise lets us support projects that don't allow top-level await.
 */
const withSkipTheBuild = (
  skipTheBuildConfig: SkipTheBuildConfig,
  baseViteConfig: UserConfigExport,
): ((viteEnv: ConfigEnv) => Promise<UserConfig>) => {
  const asyncUserConfigFn = async (viteEnv: ConfigEnv) => {
    const skipTheBuildViteConfig = await getViteConfig(skipTheBuildConfig);
    const otherConfig = await resolveFnOrPromise<UserConfig, [ConfigEnv]>(baseViteConfig, viteEnv);
    return mergeConfig(skipTheBuildViteConfig, otherConfig);
  };
  return asyncUserConfigFn;
};

export { getExportConditions, getViteConfig, withSkipTheBuild };
