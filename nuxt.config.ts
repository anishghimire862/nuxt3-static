export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      name: process.env.APP_NAME,
      appUrl: process.env.APP_URL,
    }
  },
  ssr: false
})


