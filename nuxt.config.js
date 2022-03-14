import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Pinap',
    title: 'Pinap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'バレエ, 動画, 演目, パ, ダンサー, ヴァリエーション' },
      { hid: 'description', name: 'description', content: 'バレエ動画が検索しやすくなるサイトです' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Pinap' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://pinap.jp' },
      { hid: 'og:title', property: 'og:title', content: 'Pinap' },
      { hid: 'og:description', property: 'og:description', content: 'バレエ用語をラクラク検索！' },
      { hid: 'og:image', property: 'og:image', content: 'https://pinap.jp/pinap_ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' }  // twitterの画像サイズ
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/pinap.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase',
    '~/plugins/vue-scrollto'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/dotenv',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_KEY
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      // source: '/pinap_icon.png'
      source: 'nuxt/static/pinap_icon_v2.png',
      fileName: 'pinap_icon_v2.png'
    },
    manifest: {
      lang: 'ja',
      name: 'Pinap',
      short_name: 'Pinap',
      title: 'Pinap',
      description: 'バレエ用語をラクラク検索！',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
