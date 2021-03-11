export default {

  // Envorioment variables
  env: {
    baseUrl: process.env.BASE_URL || 'https://panelweb.derkayvargas.com',
    apiUrl: process.env.API_URL || 'https://panelweb.derkayvargas.com/api',
    //baseUrl: process.env.BASE_URL || 'http://webdyvsa.test',
    //apiUrl: process.env.API_URL || 'http://webdyvsa.test/api'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Derka y Vargas Web Site',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Derka y Vargas Concesionario Oficial Toyota en Chaco' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'logo-og.jpg' },
      { hid: 'og:url', name: 'og:url', content: 'https://derkayvargas.com' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-image-lightbox.js', ssr: false},
    { src: '~/plugins/notifier.js', ssr: false },
    '~plugins/filters.js'
   ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/firebase'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt', 
    '@nuxtjs/recaptcha',
    '@nuxtjs/axios',
    '@nuxt/http'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  styleResources: {
      scss: [
          '~/assets/scss/variables.scss',
      ]
  },
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LfNaxkaAAAAAAaa8BjSNM7IyzLOCrVQnuix83Pc', // Site key for requests
    version: 2, // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  googleAnalytics: {
    id: 'UA-132697927-2',
    debug: {
      sendHitTask: process.env.NODE_ENV == 'production'
    }
  },
  firebase: {
    lazy: false,
    config: {
      apiKey: 'AIzaSyChcPHdTMHnIsraLntqj0j1S7OSdVzM1vQ',
      authDomain: 'web-derka-y-va-1538676350230.firebaseapp.com',
      projectId: 'web---derka-y-va-1538676350230',
      storageBucket: 'web---derka-y-va-1538676350230.appspot.com',
      messagingSenderId: '712801085814',
      appId: '1:712801085814:web:8711ae39d06920eabd7257',
      //measurementId: 'G-DS6R56RVMX',
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true,
    services: {
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
        emulatorPort: process.env.NODE_ENV === 'development' && false ? 8080 : undefined,
      },
      functions: {
        emulatorPort: process.env.NODE_ENV === 'development' && false ? 12345 : undefined,
      },
      storage: true,
      database: {
        emulatorPort: process.env.NODE_ENV === 'development' && false ? 9000 : undefined,
      },
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000,
          minimumFetchIntervalMillis: 43200000,
        },
        defaultConfig: {
          welcome_message: 'Welcome',
        },
      },
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: 'goToLupasGithub',
            url: 'https://github.com/lupas',
          },
          {
            action: 'goToModuleGithub',
            url: 'https://github.com/nuxt-community/firebase-module',
          },
        ],
        fcmPublicVapidKey:
          'BEWbo1WIU8VOeloMaHwrgts9HSuqa3u2n58Aa5cvkXEPNaV8We--KIaaHov6fev6wF_ijxdETECPgkNdlim6ygw',
      },
    },
  },
}
