import { getExportConditions, type SkipTheBuildConfig } from 'skip-the-build';
import type { Configuration } from 'webpack';

type ResolvedWebpackConfig = Configuration | Configuration[];
type WebpackConfigInput<T extends ResolvedWebpackConfig> = T | Promise<T>;
type WebpackConfigFunction<T extends ResolvedWebpackConfig> = (
  env: unknown,
  argv: unknown,
) => WebpackConfigInput<T>;
type WebpackConfigExport =
  | WebpackConfigInput<ResolvedWebpackConfig>
  | WebpackConfigFunction<ResolvedWebpackConfig>;

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
    const resolved = await baseConfig;
    const exportConditions = await getExportConditions(skipTheBuildConfig);
    return applyToResolved(resolved, exportConditions);
  })();
}

export { getExportConditions, getWebpackConfig, withSkipTheBuild };
