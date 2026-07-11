// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
  ],

  css: ['~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'de',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: false,
    locales: [
      { code: 'de', language: 'de-CH', name: 'Deutsch', file: 'de.json' },
      { code: 'en', language: 'en', name: 'English', file: 'en.json' },
    ],
    customRoutes: 'config',
    pages: {
      'ueber-uns': { de: '/ueber-uns', en: '/about' },
      kontakt: { de: '/kontakt', en: '/contact' },
      'leistungen/index': { de: '/leistungen', en: '/services' },
      'leistungen/[slug]': { de: '/leistungen/[slug]', en: '/services/[slug]' },
    },
  },

  image: {
    dir: 'public',
  },

  eslint: {
    config: { stylistic: false },
  },
})
