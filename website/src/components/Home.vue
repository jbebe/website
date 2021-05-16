<template>
  <Header />
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">

</style>
