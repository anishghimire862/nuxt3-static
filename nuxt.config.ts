export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '123456',
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      appUrl: process.env.NUXT_PUBLIC_APP_URL,
    }
  },
  ssr: false
})


