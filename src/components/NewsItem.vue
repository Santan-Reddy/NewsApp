<template>
  <div class="news_item">
    <div class="image">
      <img :src="news.image_url" alt="image" />
    </div>
    <div class="body">
      <div class="title">{{ news.title }}</div>
      <div class="date">{{ formatDate(news.published_at) }}</div>
      <div class="description">{{ news.description }}</div>
      <div class="keywords" v-if="news.keywords.length > 0">
        <div
          class="each_keyword"
          v-for="(word, index) in news.keywords.split(', ').slice(0, 5)"
          :key="index"
        >
          {{ word }}
        </div>
      </div>
      <div v-else>
        <div class="no_keywords">No Keywords</div>
      </div>
      <div class="options">
        <div class="features">
          <div class="like" @click="toggleLike(news)">
            <!-- {{ isLiked(news) ? 'Unlike' : 'Like' }} -->
            <img src="../assets/images/like-unfilled.png" alt="like" v-if="!isLiked(news)" />
            <img src="../assets/images/like-filled.png" alt="dislike" v-else />
          </div>
          <div class="save" @click="toggleSave(news)">
            <!-- {{ isSaved(news) ? 'Unsave' : 'Save' }} -->
            <img src="../assets/images/save-unfilled.png" alt="save" v-if="!isSaved(news)" />
            <img src="../assets/images/save filled.png" alt="unsave" v-else />
          </div>
        </div>
        <!-- <div class="source">{{ news.source }}</div> -->
        <div class="article"><a :href="news.url" target="_blank">Read More</a></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDate, toggleLike, isLiked, toggleSave, isSaved } from '../scripts'

const props = defineProps({
  news: Object
})
</script>

<style scoped>
.news_item {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: var(--background-secondary);
  box-shadow: rgb(0, 0, 0, 0.2) 0px 5px 10px;
  /* max-height: 350px; */
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 5px;
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
  .body {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-weight: 700;
      font-size: 2rem;
    }
    .keywords {
      display: flex;
      margin-top: 10px;
      font-size: 0.9rem;
      flex-wrap: wrap;
      align-items: center;
      .each_keyword {
        padding: 7px;
        margin: 3px 7px;
        background-color: #dda7a7;
        border-radius: 5px;
      }
    }
    .no_keywords {
      font-size: 0.9rem;
      color: gray;
    }
    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .features {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100px;
        img {
          cursor: pointer;
          height: 20px;
        }
      }
      .article {
        margin: 0 10px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: var(--colour-1);
        a {
          color: var(--text-primary);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
