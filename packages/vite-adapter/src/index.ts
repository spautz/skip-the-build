import { getResolveConditions, type SkipTheBuildConfig } from 'skip-the-build';
import { mergeConfig, type UserConfig } from 'vite';

const defaultConditionsForVite = ['import', 'default'];

const internal_createViteConfigForImportConditions = (
  importConditions: Array<string>,
): UserConfig => {
  return {
    resolve: {
      conditions: importConditions,
    },
  };
};

const getViteConfig = async (skipTheBuildConfig: SkipTheBuildConfig): Promise<UserConfig> => {
  const resolveConditions = await getResolveConditions(skipTheBuildConfig);
  return internal_createViteConfigForImportConditions(resolveConditions);
};

const getAllImportConditions = async (
  skipTheBuildConfig: SkipTheBuildConfig,
  otherConditionsToInclude?: Array<string>,
): Promise<Array<string>> => {
  const resolveConditions = await getResolveConditions(skipTheBuildConfig);
  const allConditions = [
    ...resolveConditions,
    ...(otherConditionsToInclude || []),
    ...defaultConditionsForVite,
  ];

  // Unique-ify it
  return [...new Set(allConditions)];
};

const maybeSkipTheBuild = async (
  skipTheBuildConfig: SkipTheBuildConfig,
  baseViteConfig: UserConfig,
): Promise<UserConfig> => {
  const allConditions = await getAllImportConditions(
    skipTheBuildConfig,
    baseViteConfig?.resolve?.conditions,
  );
  const newConfig = mergeConfig(
    baseViteConfig,
    internal_createViteConfigForImportConditions(allConditions),
  );
  return newConfig;
};

export { getAllImportConditions, getViteConfig, maybeSkipTheBuild };
