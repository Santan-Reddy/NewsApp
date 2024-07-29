<script setup>
const API_KEY = 'up48YOiBo3mDN4CcRIXtcjnKSvWqIEtok1vQHKCh'

const each_news = {
  uuid: '51e27399-7be4-4dd2-ae42-631c719539d9',
  title:
    "'There's No Music Business, I'm a T-Shirt Salesman': Exodus Bassist Speaks Up on the State of the Industry",
  description: "'It isn't that I'm just jaded, it's that there's no music business anymore.'",
  keywords: 'exodus, exodus band, jack gibbons, exodus bassist',
  snippet:
    "It's no secret that things are rough for musicians. Even the old, bigger names have it hard to make a living doing their thing unless they've somehow been doing...",
  url: 'https://www.ultimate-guitar.com/news/general_music_news/theres_no_music_business_im_a_t-shirt_salesman_exodus_bassist_speaks_up_on_the_state_of_the_industry.html',
  image_url:
    'https://www.ultimate-guitar.com/static/article/news/0/168150_0_wide_ver1722206154.jpg',
  language: 'en',
  published_at: '2024-07-29T02:35:54.000000Z',
  source: 'ultimate-guitar.com',
  categories: ['entertainment'],
  relevance_score: null
}

const formatDate = (string) => {
  const date = new Date(string)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }
  return date.toLocaleDateString('en-GB', options)
}
</script>

<template>
  <div class="news_items">
    <div class="image">
      <img :src="each_news.image_url" alt="image" />
    </div>
    <div class="body">
      <div class="title">{{ each_news.title }}</div>
      <div class="date">{{ formatDate(each_news.published_at) }}</div>

      <div class="keywords">
        <div
          class="each_keyword"
          v-for="(word, index) in each_news.keywords.split(', ')"
          :key="index"
        >
          {{ word }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news_items {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: var(--background-secondary);
  box-shadow: rgb(0, 0, 0, 0.2) 0px 5px 10px;
  .image {
    img {
      border-radius: 5px;
      width: 100%;
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
      flex-wrap: wrap;
      align-items: center;
      .each_keyword {
        padding: 10px;
        margin: 0 10px;
        background-color: var(--navbar-hover);
        border-radius: 5px;
      }
    }
  }
}
</style>
