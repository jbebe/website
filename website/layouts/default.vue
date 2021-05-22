<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from './../components/header';
import Footer from './../components/footer';

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

#app {
  margin: 23px 14px;
}

</style>
