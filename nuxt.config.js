export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  globalName: 'elysee',
  loading: false,

  globals: {
    id: (globalName) => `__${globalName}`,
    nuxt: (globalName) => `$${globalName}`,
    context: (globalName) => `__${globalName.toUpperCase()}__`,
    pluginPrefix: (globalName) => globalName,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'elysee',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  styleResources: {
    scss: ['~styles/_variables.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['plugins/observe-visibility'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/public/',
  },
}
