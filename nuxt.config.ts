export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel',
    externals: {
      inline: ['vue', 'vue-router'],
    },
  },

  css: [
    '~/assets/styles/global.scss',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation',
  ],

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n'],

  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  features: {
    inlineStyles: true,
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
