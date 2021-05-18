<template>
  <div class="md-container" v-html="data"></div>
</template>

<script>
export default {
  name: 'MdContainer',
  props: {
  	data: {
      type: String,
      required: true,
  	},
  },
  mounted: () => {
    document.querySelectorAll('.md-container img').forEach(($img) => {
      const $imgContainer = document.createElement('div')
      $imgContainer.innerHTML = `
        <div class="img-wrapper">
          <a href="${$img.src}" class="img-anchor" target="_blank">
            <img src="${$img.src}" alt="${$img.alt}" />
            <div class="img-load"></div>
          </a>
          <div class="img-alt">${$img.alt}</div>
        </div>`
      $img.parentNode.replaceChild($imgContainer, $img)
    })
  },
}
</script>

<style lang="scss">
  @import '../../styles/animation';
  @include keyframes(imgAnim);

  .md-container {
    margin: 13px 0 20px;
    opacity: 0;
    @keyframes flickerAnim {
      0% { opacity: 0 }
      100% { opacity: 1 }
    }
    animation: 1ms linear 1500ms 1 flickerAnim;
    animation-fill-mode: forwards;

    .img-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .img-anchor {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;

        .img-load {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: white;
          animation: 2000ms linear 2000ms 1 imgAnim;
          animation-fill-mode: forwards;
        }

        img {
          max-width: 80vw;
          max-height: 50vh;
          position: relative;
        }
        & + .img-alt {
          text-align: center;
          font-style: italic;
        }
      }
    }
  }
</style>
