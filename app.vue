<script setup>
const version = 2 + 1
const runtimeConfig = useRuntimeConfig()
const appName = runtimeConfig.appName
const appUrl = runtimeConfig.appUrl
console.log(runtimeConfig)
</script>

<template>
  <div class="hello">
    Hello Nuxt {{ version }}!
    <br />
    App Name: {{ appName }}
    <br />
    App URL: {{ appUrl }}
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>

