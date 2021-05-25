<template>
  <div>
    <div v-if="page" @click="$router.go(-1)" class="back-img"></div>
    <MdContainer>
      <div v-if="articles">
        <h1>{{ title }}</h1>
        <div v-for="article of articles" :key="article.path">
            <h3 v-bind:class="{ new: isNew(article) }">
              <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
              <small>{{ article.description }} - {{ article.date }}</small>
            </h3>
        </div>
      </div>
      <div v-if="page">
        <h1>{{ page.title }}</h1>
        <img class="cover-img" v-if="page.cover" :src="`${$config.assetUrl}/${page.cover}`" />
        <nuxt-content :document="page" />
      </div>
    </MdContainer>
  </div>
</template>

<script lang="ts">
  import MdContainer from './markdown-container.vue'

  export default {
    components: {
      MdContainer
    },
    props: ['title', 'articles', 'page'],
    methods: {
      isNew(article: any){
        return (new Date().getTime() - new Date(article.date).getTime()) / 3.6e7 < 7
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes backAnim {
    0% {
      transform: translateX(0px);
    }
    49% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(-3px);
    }
  }

  .back-img {
    margin: 10px 10px 0;
    animation: 2000ms infinite backAnim;
    cursor: pointer;
    background: url('data:image/gif;base64,R0lGODlhJwAeAMQVANQqKqoqKv+qqtRVVaoAKunU1JVPT/9/f/9VVbt2dv/U1J18W9R/f9O9vX8qKn8AAKoAAFUAANQAAP8AAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABUALAAAAAAnAB4AAAX2YCWOZBktZaqubBW9bSyLLzzfZfNKNo4XO17EhzMEhcRZTcIU1p7Q6FO1bEogj6x2y+32RlWruDkpm8/nr+s4bqPf5W9YQqlT2uRzHd2b0+11eExme2lDaxEQEFYUi39MDBQCjANlewgCcUMvD4qKTRQBAQcUA392p3t1ABRmT52en6mNjHeBdKcSrk+xsbSPgLYAtYUTMDW9ir+Bd8DNtra7NC/JwQGzEgqAzpojCdTJskwEY8N4xociFODhgu5MauuJ4Y7vbWoV8vT19lb4+ZxiSRlIkEVARQQTQmmBDMK/JCuQPYRIZQrFGxYvKpmoMYWDjiEAADs=') no-repeat;
    width: 39px;
    height: 30px;
  }
  .md-container {
    h3 {
      > small {
        display: block;
        font-weight: 100;
      }

      &.new {
        > small {
          margin-left: 45px;
        }
        &::before {
          content: ' ';
          display: inline-block;
          width: 45px;
          height: 30px;
          margin-bottom: -9px;
          background: url('data:image/png;base64,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') no-repeat;
          background-size: contain;
        }
      }
    }
    img.cover-img {
      max-width: 100%;
      max-height: 200px;
    }
  }
</style>