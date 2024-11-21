// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      url: process.env.NUXT_API_BASE_URL || 'http://localhost:3000/api/web/',
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', 'nuxt-swiper', '@pinia/nuxt'],
  plugins: ['~/plugins/fetch.ts', '~/plugins/auth.ts'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})