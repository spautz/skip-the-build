// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig, type NuxtConfig } from 'nuxt/config';

const nuxtConfig: NuxtConfig = defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
});

export default nuxtConfig;
