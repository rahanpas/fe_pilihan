// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/color-mode', 'nuxt-sanctum-auth'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css', 'aos/dist/aos.css'],
  ssr: false,
  plugins: ['~/plugins/mdi.js', '~/plugins/smooth-scroll.js', '~/plugins/laravel-echo'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },

  nuxtSanctumAuth: {
    token: true, // set true to use jwt-token auth instead of cookie. default is false
    baseUrl: 'http://localhost:8000',
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: 'api/login',
      logout: 'api/logout',
      user: 'api/user'
    },
    csrf: {
      headerKey: 'X-XSRF-TOKEN',
      cookieKey: 'XSRF-TOKEN',
      tokenCookieKey: 'token'
    },
    redirects: {
      home: '/dashboard',
      login: '/login',
      logout: '/'
    }
  },
  // runtimeConfig: {
  //   apiSecret: import.meta.env.VITE_API_BASE_URL, // can be overridden by NUXT_API_SECRET environment variable
  //   public: {
  //     apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
  //   }
  // },
})
