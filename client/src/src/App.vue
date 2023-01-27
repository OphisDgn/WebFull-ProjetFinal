<template>
  <div class="navbar-container">
      <div @click="NavBarToggler()" class="burger-menu">        
        <span  class=" hamburger hamburger--stand">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </span> 
      </div>
    <nav class="navbar" v-if="isLoggedIn">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <span @click="disconnect" class="disconnect" >Disconnect</span>
    </nav>
  </div>
  <router-view />
</template>

<script>

import { onMounted, provide, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {

    const router = useRouter()
    const route = useRoute()
    const isLoggedIn = ref(true)

    provide('isLoggedIn', isLoggedIn)

    const disconnect = () => {
      isLoggedIn.value = false
      router.push('/login')
    }

    const NavBarToggler = () => {
      const burgerMenu = document.querySelector('.hamburger')
      const navbar = document.querySelector('.navbar')
      navbar.classList.toggle('active')
      burgerMenu.classList.toggle('is-active')
    }

    onMounted(() => {
      if (isLoggedIn.value === false) {
        router.push('/login')
      }
    })

    watch(
      () => route.path,
      async newRoute => {
        console.log("newRoute")
        if (isLoggedIn.value === false) {

          router.push('/login')
        }
      }
    )

    return {
      isLoggedIn,
      NavBarToggler,
      disconnect
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
