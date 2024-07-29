<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

const isTopOfPage = ref(true)

const handleScroll = () => {
  if (window.scrollY === 0) {
    isTopOfPage.value = true
  } else {
    isTopOfPage.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="{ scrolled: !isTopOfPage }">
    <div class="icon"><img src="../assets/images/logo.png" alt="" />News</div>
    <div class="menu">
      <ul>
        <li>Home</li>
        <li>Saved News</li>
        <li>Liked News</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  transition: all 0.5s ease;
  position: sticky;
  top: 0;
  background-color: var(--background-primary);
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  .icon {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    img {
      width: 50px;
    }
  }
  .icon:hover {
    cursor: pointer;
  }
  .menu {
    ul {
      list-style: none;
      display: flex;
      li {
        padding: 10px 20px;
        margin: 0 10px;
        border-radius: 5px;
      }
      li:hover {
        background-color: var(--navbar-hover);
        transition: all 0.5s ease;
        cursor: pointer;
      }
    }
  }
}
nav.scrolled {
  background-color: var(--background-secondary);
  box-shadow: rgb(0, 0, 0, 0.2) 0px 5px 10px;
}
</style>
