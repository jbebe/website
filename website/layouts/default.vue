<template>
  <div id="app">
    <svg class="offscreen" width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="crispify">
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 1"/>
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header';
import Footer from '../components/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'Your Website'
    }
  },
}
</script>

<style lang="scss">
@import "../assets/styles/default";
@import '../assets/styles/breakpoints';

#app {
  margin: 23px 14px;

  @media (min-width: $breakpoint-tablet){
    max-width: $breakpoint-tablet;
    margin: 0 auto;
  }
}

</style>
