export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'irltest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/apollo',
  ],
  apollo: {
    clientConfigs: {
      default: {
        // process.env.IRL_ENDPOINT ||
        // 'https://rickandmortyapi.com/graphql/'
        // 'https://web.api.irl.com/.netlify/functions/graphql/'
        httpEndpoint: 'https://web.api.irl.com/.netlify/functions/graphql/',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate:{
    done(generator){
      // Copy dist files to public/_nuxt
      if (generator.nuxt.options.dev === false && generator.nuxt.options.mode === 'spa') {
        const publicDir = join(generator.nuxt.options.rootDir, 'public', '_nuxt')
        removeSync(publicDir) //Clear content from previous builds
        copySync(join(generator.nuxt.options.generate.dir, '_nuxt'), publicDir)
        copySync(join(generator.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
        removeSync(generator.nuxt.options.generate.dir) //Delete 'Dist' folder from Laravel root
      }
      console.log("After generate dist folder");
    }
  }
}
