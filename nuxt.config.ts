export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      name: process.env.NUXT_PUBLIC_APP_NAME,
      appUrl: process.env.NUXT_PUBLIC_APP_URL,
    }
  },
  ssr: false
})


