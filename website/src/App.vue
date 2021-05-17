<template>
  <component v-if="fontLoaded" v-bind:is="'Home'"></component>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  data: () => ({
    fontLoaded: false,
  }),
  components: {
    Home
  },
  async mounted() {
    const fonts = await document.fonts.ready;
    console.log('fonts loaded', await (fonts.ready));
    document.body.classList.add('font-loaded')
    this.fontLoaded = true
  },
}
</script>

<style lang="scss">
body {
  visibility: hidden;
  font-display: auto;
  font-family: 'WindowsRegular';
  font-display: block;
  
  &.font-loaded {
    visibility: visible;
  }
}

#app {
  margin: 23px 14px;
}

</style>
