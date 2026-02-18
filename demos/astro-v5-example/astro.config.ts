import { withSkipTheBuild } from '@skip-the-build/astro';
import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';

import skipTheBuildSettings from '../../skip-the-build.ts';

const astroConfig: AstroUserConfig = defineConfig(withSkipTheBuild(skipTheBuildSettings, {}));

export default astroConfig;
