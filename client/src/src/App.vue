<template>
  <nav v-if="isLoggedIn">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>

import { onMounted, provide, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {

    const router = useRouter()
    const isLoggedIn = ref(false)

    provide('isLoggedIn', isLoggedIn)

    onMounted(() => {
      if (isLoggedIn.value === false) {
        router.push('/login')
      }
    })

    return {
      isLoggedIn
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
