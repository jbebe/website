<template>
  <div v-if="fontLoaded">
    <Header />
    <router-view />
    <Footer />
    <div class="screen"></div>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',
  data: () => ({
    fontLoaded: false,
  }),
  components: {
    Header,
    Footer,
  },
  async mounted() {
    await document.fonts.ready
    document.body.classList.add('font-loaded')
    this.fontLoaded = true
    setTimeout(() => {
      const $screen = document.querySelector('.screen')
      $screen.parentNode.removeChild($screen)
    }, 4100)
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'Your Website'
    }
  },
}
</script>

<style lang="scss">
@import "styles/default";

#app {
  margin: 23px 14px;

  .screen {
    position: fixed;
    background-color: white;
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    &.active {
      display: block;
    }
  }
}

</style>
