<template>
  <div class="md-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MdContainer',
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
  @import '../assets/styles/animation';
  @include keyframes(imgAnim);

  .md-container {
    margin: 13px 5px 20px;
    min-height: calc(100vh - 300px);

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
          animation: 2000ms linear 100ms 1 imgAnim;
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
