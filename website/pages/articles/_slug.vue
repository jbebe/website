<template>
  <Article title="Articles" :articles="articles" :page="page" />
</template>

<script>
  import Article from '../../components/article.vue'
  import { WebsiteTitle } from '../../library/config'
  import { loadArticlesAsync } from '../../library/helpers'

  export default {
    components: {
      Article,
    },
    async asyncData({ $content, params }) {
      return await loadArticlesAsync($content, 'articles', params?.slug);
    },
    head() {
      return { title: `${this.page?.title || 'Articles'} | ${WebsiteTitle}` }
    }
  }
</script>
