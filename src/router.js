import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/NewsBody.vue'
import SavedNews from './components/SavedNews.vue'
import LikedNews from './components/LikedNews.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/saved-news', component: SavedNews },
  { path: '/liked-news', component: LikedNews }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
