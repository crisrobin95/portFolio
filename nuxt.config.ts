export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/styles/global.scss',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation',
  ],

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n'],

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

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    langDir: 'locales',
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        language: 'es-ES',
        file: 'es/index.ts',
      },
      {
        code: 'en',
        language: 'en-US',
        file: 'en/index.ts',
      },
    ],
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    pages: {
      habilidades: {
        es: '/habilidades',
        en: '/skills',
      },
      experiencia: {
        es: '/experiencia',
        en: '/experience',
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },
})
