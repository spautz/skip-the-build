import { getExportConditions, resolveFnOrPromise, type SkipTheBuildConfig } from 'skip-the-build';
import { type ConfigEnv, mergeConfig, type UserConfig } from 'vite';

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
const withSkipTheBuild = <TConfig extends object, TEnv = ConfigEnv>(
  skipTheBuildConfig: SkipTheBuildConfig,
  baseViteConfig: TConfig | Promise<TConfig> | ((viteEnv: TEnv) => TConfig | Promise<TConfig>),
): ((viteEnv: TEnv) => Promise<TConfig>) => {
  const asyncUserConfigFn = async (viteEnv: TEnv): Promise<TConfig> => {
    const skipTheBuildViteConfig = await getViteConfig(skipTheBuildConfig);
    const otherConfig = await resolveFnOrPromise<TConfig, [TEnv]>(baseViteConfig, viteEnv);
    return mergeConfig(skipTheBuildViteConfig, otherConfig as object) as TConfig;
  };
  return asyncUserConfigFn;
};

export { getExportConditions, getViteConfig, withSkipTheBuild };
