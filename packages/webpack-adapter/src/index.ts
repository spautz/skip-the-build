// import { getResolveConditions, type SkipTheBuildConfig } from 'skip-the-build';
//
// const defaultConditionsForWebpack = ['import', 'require', 'default'];

const internal_createWebpackConfigForImportConditions = (importConditions: Array<string>) => {
  return {
    resolve: {
      conditionNames: importConditions,
    },
  };
};

// const getWebpackConfig = async (skipTheBuildConfig: SkipTheBuildConfig): Promise<UserConfig> => {
//   const resolveConditions = await getResolveConditions(skipTheBuildConfig);
//   return internal_createWebpackConfigForImportConditions(resolveConditions);
// };
//
// const getAllImportConditions = async (
//   skipTheBuildConfig: SkipTheBuildConfig,
//   otherConditionsToInclude?: Array<string>,
// ): Promise<Array<string>> => {
//   const resolveConditions = await getResolveConditions(skipTheBuildConfig);
//   const allConditions = [
//     ...resolveConditions,
//     ...(otherConditionsToInclude || []),
//     ...defaultConditionsForWebpack,
//   ];
//
//   // Unique-ify it
//   return [...new Set(allConditions)];
// };
//
// const maybeSkipTheBuild = async (
//   skipTheBuildConfig: SkipTheBuildConfig,
//   baseWebpackConfig: UserConfig,
// ): Promise<UserConfig> => {
//   const allConditions = await getAllImportConditions(
//     skipTheBuildConfig,
//     baseWebpackConfig?.resolve?.conditions,
//   );
//   const newConfig = mergeConfig(
//     baseWebpackConfig,
//     internal_createWebpackConfigForImportConditions(allConditions),
//   );
//   return newConfig;
// };
//
// export { getAllImportConditions, getWebpackConfig, maybeSkipTheBuild };

export { internal_createWebpackConfigForImportConditions };
