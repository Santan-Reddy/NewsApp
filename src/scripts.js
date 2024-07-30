import { ref } from 'vue'

export const likedNews = ref([])
export const savedNews = ref([])

// export const formatDate = (date) => {
//   const options = { year: 'numeric', month: 'short', day: 'numeric' }
//   return new Date(date).toLocaleDateString(undefined, options)
// }
export const formatDate = (string) => {
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

export const toggleLike = (news) => {
  const index = likedNews.value.findIndex((item) => item.uuid === news.uuid)
  if (index === -1) {
    likedNews.value.push(news)
  } else {
    likedNews.value.splice(index, 1)
  }
}

export const isLiked = (news) => {
  return likedNews.value.some((item) => item.uuid === news.uuid)
}
export const toggleSave = (news) => {
  const index = savedNews.value.findIndex((item) => item.uuid === news.uuid)
  if (index === -1) {
    savedNews.value.push(news)
  } else {
    savedNews.value.splice(index, 1)
  }
}

export const isSaved = (news) => {
  return savedNews.value.some((item) => item.uuid === news.uuid)
}
