// // @TODO: Restore after next publish
// import { presets, type SkipTheBuildConfig } from 'skip-the-build';
//
// const skipTheBuildConfig: SkipTheBuildConfig = {
//   // For this local demo we only look at the SKIP_THE_BUILD env var
//   extend: presets.envVarOnly
//   settings: {
//     exportConditionName: 'local-dev',
//   },
// };
//
// export default skipTheBuildConfig;

export default {
  settings: {
    exportConditionName: 'local-dev',
  },
};
