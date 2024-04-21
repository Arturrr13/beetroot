// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      socketPort: 3001,
      url: 'http://localhost'
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  imports: {
    dirs: ['./stores']
  },
  plugins: [
    './plugins/socket.io'
  ],
  nitro: {
    plugins: [
      './plugins/socket.io.server',
    ]
  },
  i18n: {
    lazy: true,
    langDir: 'assets/i18n',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'uk-ua',
        name: 'Ukraine',
        file: 'uk-ua.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },
  typescript: {
    strict: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/colors.scss"; @import "@/assets/css/mixins.scss";'
        }
      }
    },
    //base: '/la/test/nuxt-chat-test/'
  },
  alias:{
    "@@": "/<rootDir>"
  },
  app: {
    baseURL: '/la/test/nuxt-chat-test/',
    //cdnURL: "../"
  },
  experimental: {
    payloadExtraction: false
  },
  css: ['~/assets/css/style.scss']
})
