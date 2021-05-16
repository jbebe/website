<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@font-face {
  font-family: 'Pixellium';
  src: url('./assets/Pixellium.ttf')  format('truetype');
}
@font-face {
  font-family: 'DeterminationSansRegular';
  src: url('./assets/DeterminationSansWebRegular.ttf')  format('truetype');
}
@font-face {
  font-family: 'EightBitDragon';
  src: url('./assets/EightBitDragon.ttf')  format('truetype');
}
@font-face {
  font-family: 'Unifont';
  src: url('./assets/Unifont.ttf')  format('truetype');
}

#app {
  font-family: 'Unifont';
  margin: 23px 14px;
}
</style>
