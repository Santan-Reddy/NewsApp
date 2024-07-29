<script setup>
import NavBar from './components/NavBar.vue'
import NewsBody from './components/NewsBody.vue'
</script>

<template>
  <NavBar />
  <body>
    <NewsBody />
  </body>
</template>

<style scoped>
body {
  max-width: 95vw;
  margin: 10px auto;
}
</style>
