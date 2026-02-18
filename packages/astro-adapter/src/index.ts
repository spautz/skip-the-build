import { getExportConditions, getViteConfig } from '@skip-the-build/vite';
import type { AstroUserConfig } from 'astro';
import { mergeConfig } from 'astro/config';

import type { SkipTheBuildConfig } from 'skip-the-build';

const getAstroConfig = async (skipTheBuildConfig: SkipTheBuildConfig): Promise<AstroUserConfig> => {
  const exportConditions = await getExportConditions(skipTheBuildConfig);
  if (exportConditions.length) {
    const viteConfig = await getViteConfig(skipTheBuildConfig);

    // Astro just nests the Vite config under its own key. We'll just pass everything through.
    return {
      vite: viteConfig as unknown,
    } as AstroUserConfig;
  }
  // Nothing to do. (It's somewhat cleaner to use an empty object when logging/debugging,
  // instead of having a bunch of nested empty arrays)
  return {};
};

type AstroUserConfigFn = () => Promise<AstroUserConfig>;

const withSkipTheBuild = (
  skipTheBuildConfig: SkipTheBuildConfig,
  baseAstroConfig: AstroUserConfig,
): AstroUserConfigFn => {
  const asyncAstroConfigFn = async () => {
    const skipTheBuildAstroConfig = await getAstroConfig(skipTheBuildConfig);
    return mergeConfig(skipTheBuildAstroConfig, baseAstroConfig);
  };
  return asyncAstroConfigFn;
};

export { getExportConditions, getAstroConfig, withSkipTheBuild };
