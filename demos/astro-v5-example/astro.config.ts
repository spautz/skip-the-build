import { withSkipTheBuild } from '@skip-the-build/astro';
import { defineConfig } from 'astro/config';

import skipTheBuildSettings from '../../skip-the-build.ts';

const astroConfig = defineConfig(await withSkipTheBuild(skipTheBuildSettings, {}));

export default astroConfig;
