export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME,
      appUrl: process.env.APP_URL,
    }
  },
  ssr: false
})


