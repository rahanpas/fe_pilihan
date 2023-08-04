// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/image'],
  css: [
    '@/assets/css/main.css','aos/dist/aos.css'
  ],
  plugins: ['~/plugins/mdi.js','~/plugins/smooth-scroll.js'],
  
})
