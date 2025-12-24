export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/styles/reset.scss',
    './assets/styles/variablesCss.css',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation',
  ],

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],

  ssr: false,
  experimental: {
    payloadExtraction: false,
  },
  app: {
    head: {
      title: 'Mi Portfolio',
      titleTemplate: '%s | Mi Portfolio',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [{ charset: 'utf-8' }],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/main.scss" as main;',
        },
      },
    },
  },
})
