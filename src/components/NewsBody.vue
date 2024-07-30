<script setup>
import { onMounted, ref } from 'vue'
import NewsItem from './NewsItem.vue'

const API_KEY = 'up48YOiBo3mDN4CcRIXtcjnKSvWqIEtok1vQHKCh'
const url_AllNews = `https://api.thenewsapi.com/v1/news/all?api_token=${API_KEY}&language=en&limit=10`
const fetchAllNews = async () => {
  console.log('Fetching News...')
  const response = await fetch(url_AllNews)
  const data = await response.json()
  console.log(data.data)
  newsList.value = data.data
}
onMounted(() => {
  fetchAllNews()
})

const newsList = ref([])
// const newsList = [
//   {
//     uuid: '8b5d9b4d-2a3d-4999-8ef5-7f14d7ca4dd3',
//     title: 'ICv2: SDCC News: Marvel Roundup',
//     description:
//       'Daily coverage of the pop culture products industry, including toys (action figures, models and statues), anime (anime, manga, and Japanese imports), games (col...',
//     keywords:
//       'Star Wars, Star Trek, X-Men, Gundam Wing, Dragonball Z, Pokemon, Akira, Lone Wolf and Cub, Magic the Gathering, Dungeons and Dragons, Mage Knight, Superman, Spider-man, JLA, Batman, Buffy the Vampire Slayer, J.R.R. Tolkien, Sailor Moon, Sandman, Harry Potter. Genres we cover include fantasy, science fiction, horror.',
//     snippet:
//       "West Coast Avengers Return, More Ultimates, Kids' Comics, FF Primer in Halloween Giveaways\n\nC.B. Cebulski, Dan Buckley, and David Gabriel at the Diamond Lunch\n\n...",
//     url: 'https://icv2.com/articles/news/view/57469/sdcc-news-marvel-roundup',
//     image_url:
//       'https://icv2.com/images/article_thumbs/650x650_050ed75166009f577a0e61e5697520e7779ca6d493e9a6795753d1a3.jpg',
//     language: 'en',
//     published_at: '2024-07-30T02:07:06.000000Z',
//     source: 'icv2.com',
//     categories: ['entertainment', 'tech'],
//     relevance_score: null
//   },
//   {
//     uuid: '649ca975-648c-4671-a3c2-1d9de35bbfa3',
//     title: 'Kamloops, B.C., led Canada in reported crime rates for 2023',
//     description:
//       'Kamloops, B.C., had Canada’s highest crime rate in 2023 for communities with at least 100,000 people, though one expert says residents should “absolutely no...',
//     keywords: '',
//     snippet:
//       'Kamloops, B.C., had Canada\'s highest crime rate in 2023 for communities with at least 100,000 people, though one expert says residents should "absolutely not" b...',
//     url: 'https://www.cbc.ca/news/canada/british-columbia/kamloops-bc-crime-rates-1.7279403?cmp=rss',
//     image_url:
//       'https://i.cbc.ca/1.6345026.1722300364!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_620/kamloops-city.jpg',
//     language: 'en',
//     published_at: '2024-07-30T02:05:40.000000Z',
//     source: 'cbc.ca',
//     categories: ['general'],
//     relevance_score: null
//   }
// ]

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
  <div v-if="newsList.length === 0" class="loader">
    <h1>Loading Data ...</h1>
  </div>
  <div v-else>
    <NewsItem v-for="news in newsList" :key="news.uuid" :news="news" />
  </div>
</template>

<style scoped>
.loader {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .news_items {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: var(--background-secondary);
  box-shadow: rgb(0, 0, 0, 0.2) 0px 5px 10px;
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
    flex-wrap: wrap;
    align-items: center;
    .each_keyword {
      padding: 10px;
      margin: 5px 10px;
      background-color: var(--navbar-hover);
      border-radius: 5px;
    }
  }
}
} */
</style>
