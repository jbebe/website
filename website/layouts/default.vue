<template>
  <div id="app">
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
