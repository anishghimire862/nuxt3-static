<script setup>
const version = 2 + 1
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div class="hello">
    Hello Nuxt {{ version }}!

    <br />
    App Name: {{ runtimeConfig.name }}
    <br />
    App URL: {{ runtimeConfig.appUrl }}
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>

