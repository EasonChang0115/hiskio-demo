export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '最專業的線上程式語言課程 | 工程師首選教學平台 | HiSKIO 嗨 程式技能',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '@/scss/index.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/axios', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  axios: {
    proxy: true,
    credentials: true,
  },

  proxy: {
    '/api': {
      target: 'https://api.hiskio.com/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['cookie-universal-nuxt', '@nuxtjs/axios', '@nuxtjs/proxy'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
};
