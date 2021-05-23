<template>
  <MdContainer>
    <nuxt-content :document="page" />
  </MdContainer>
</template>

<script>
  import MdContainer from '../components/markdown-container'
  import { WebsiteTitle } from '../library/config'

  export default {
    components: {
      MdContainer
    },
    async asyncData({ $content, params }) {
      const page = await $content(params.slug || 'index').fetch()
      return { page }
    },
    head() {
      return { title: `${this.page.title} | ${WebsiteTitle}` }
    }
  }
</script>