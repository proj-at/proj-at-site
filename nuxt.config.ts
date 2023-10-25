// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'Proj.sbs (by Proj.at)',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Proj.sbs: Free subdomain service for open-source project and developers.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Sometype+Mono:wght@400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Sometype+Mono:wght@400;500;700&display=swap', media: 'print', onload: "this.media='all'" },
      ]
    }
  },
  modules: [
    '@nuxtjs/color-mode',
  ],
  extends: ['nuxt-umami'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'proj-at-color-mode-script',
    globalName: '__PROJ_AT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'proj-at-color-mode'
  },
  appConfig: {
    umami: {
      id: "644785e7-07b8-4b80-8992-c234deebb969",
      host: 'https://analytics.eu.umami.is/',
      version: 2,
    }
  }
})
