<template>
  <MdContainer>
    <nuxt-content :document="page" />
  </MdContainer>
</template>

<script>
  import MdContainer from '../components/markdown-container'

  export default {
    components: {
      MdContainer
    },
    async asyncData({ $content, params }) {
      const page = await $content(params.slug || 'index').fetch()

      return { page }
    }
  }
</script>