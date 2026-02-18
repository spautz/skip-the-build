import { getExportConditions, type SkipTheBuildConfig } from 'skip-the-build';
import type { Configuration } from 'webpack';

type Awaitable<T> = T | Promise<T>;

type ResolvedWebpackConfig = Configuration | Configuration[];
type WebpackConfigInput<T extends ResolvedWebpackConfig> = Awaitable<T>;
type WebpackConfigFunction<T extends ResolvedWebpackConfig> = (
  env: unknown,
  argv: unknown,
) => Awaitable<T>;

type WebpackConfigExport = Awaitable<
  ResolvedWebpackConfig | WebpackConfigFunction<ResolvedWebpackConfig>
>;

const createWebpackConfigForImportConditions = (importConditions: string[]): Configuration => ({
  resolve: {
    conditionNames: importConditions,
  },
});

const getWebpackConfig = async (skipTheBuildConfig: SkipTheBuildConfig): Promise<Configuration> => {
  const exportConditions = await getExportConditions(skipTheBuildConfig);
  return createWebpackConfigForImportConditions(exportConditions);
};

const addExportConditionsToConfig = (
  baseWebpackConfig: Configuration,
  exportConditions: string[],
): Configuration => {
  const existingConditions = baseWebpackConfig.resolve?.conditionNames ?? [];

  return {
    ...baseWebpackConfig,
    resolve: {
      ...baseWebpackConfig.resolve,
      conditionNames: [...exportConditions, ...existingConditions],
    },
  };
};

const applyToResolved = (
  resolved: ResolvedWebpackConfig,
  exportConditions: string[],
): ResolvedWebpackConfig => {
  if (Array.isArray(resolved)) {
    return resolved.map((webpackConfig) =>
      addExportConditionsToConfig(webpackConfig, exportConditions),
    );
  }

  return addExportConditionsToConfig(resolved, exportConditions);
};

function withSkipTheBuild<T extends ResolvedWebpackConfig>(
  skipTheBuildConfig: SkipTheBuildConfig,
  baseConfig: WebpackConfigFunction<T>,
): WebpackConfigFunction<T>;
function withSkipTheBuild<T extends ResolvedWebpackConfig>(
  skipTheBuildConfig: SkipTheBuildConfig,
  baseConfig: WebpackConfigInput<T>,
): Promise<T>;
function withSkipTheBuild(
  skipTheBuildConfig: SkipTheBuildConfig,
  baseConfig: WebpackConfigExport,
): WebpackConfigExport {
  if (typeof baseConfig === 'function') {
    return async (env, argv) => {
      const resolved = await baseConfig(env, argv);
      const exportConditions = await getExportConditions(skipTheBuildConfig);
      return applyToResolved(resolved, exportConditions);
    };
  }

  return (async () => {
    const awaited = await baseConfig;

    if (typeof awaited === 'function') {
      const baseFn = awaited;
      return async (env: unknown, argv: unknown) => {
        const resolved = await baseFn(env, argv);
        const exportConditions = await getExportConditions(skipTheBuildConfig);
        return applyToResolved(resolved, exportConditions);
      };
    }

    const exportConditions = await getExportConditions(skipTheBuildConfig);
    return applyToResolved(awaited, exportConditions);
  })();
}

export { getExportConditions, getWebpackConfig, withSkipTheBuild };
