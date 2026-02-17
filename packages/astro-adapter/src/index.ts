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

const withSkipTheBuild = async (
  skipTheBuildConfig: SkipTheBuildConfig,
  baseAstroConfig: AstroUserConfig,
): Promise<AstroUserConfig> => {
  const skipTheBuildAstroConfig = await getAstroConfig(skipTheBuildConfig);
  return mergeConfig(skipTheBuildAstroConfig, baseAstroConfig);
};

export { getExportConditions, getAstroConfig, withSkipTheBuild };
