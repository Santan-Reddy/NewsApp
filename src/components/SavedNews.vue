<template>
  <div class="noinfo" v-if="savedNews.length == 0">
    <h2>No Saved News</h2>
  </div>
  <div v-else>
    <h2>News saved for later:</h2>
    <div class="news_list">
      <NewsItem v-for="news in savedNews" :key="news.uuid" :news="news" />
    </div>
  </div>
</template>

<script setup>
import NewsItem from '../components/NewsItem.vue'
import { savedNews } from '../scripts'
</script>

<style scoped>
.noinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
