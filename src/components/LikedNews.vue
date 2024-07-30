<template>
  <div class="noinfo" v-if="likedNews.length == 0">
    <h2>No Liked News</h2>
  </div>
  <div v-else>
    <h2>Liked News:</h2>
    <div class="news_list">
      <NewsItem v-for="news in likedNews" :key="news.uuid" :news="news" />
    </div>
  </div>
</template>

<script setup>
import NewsItem from '../components/NewsItem.vue'
import { likedNews } from '../scripts'
</script>

<style scoped>
.noinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
