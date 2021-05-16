<template>
  <img src="../assets/logo.png" />
  <div class="menu">
    <div class="item" v-for="item in menuItems" :key="item.text">
      <div class="start"></div>
      <a v-bind:href="item.href" class="text">{{ item.text }}</a>
      <div class="end"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    menuItems: [
      { text: 'Blog', href: '#' },
      { text: '???', href: '#' },
      { text: 'Contact', href: '#' },
    ]
  }),
}
</script>

<style scoped lang="scss">
  .menu {
    display: flex;
    margin-top: 4px;
    font-family: 'DeterminationSansRegular';
    font-size: 16px;
    line-height: 15px;
    height: calc(24px + 3px);

    .item {
      display: flex;
      height: 24px;
      

      &:hover, &:active {
        padding-top: 3px;
        text-decoration: underline;
      }

      .start {
        width: 16px;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAMAAADEfo0+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRF1d3uvcrlMlut////z9nsCDmcRy9iAAAAACJJREFUeNpiYIQCJihgGCABGGCFgoESYIYCFigYIAGAAAMAb7YDwaTUJPsAAAAASUVORK5CYII=');
      }
      .text {
        text-decoration: none;
        color: white;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAMAAAAMEmfoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFL1msADOZo7baPSdI8AAAABNJREFUeNpiYEADjGiQCRUCBBgAAXAAGf0Y8r4AAAAASUVORK5CYII=');
      }
      .end {
        width: 8px;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAMAAAAMEmfoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFP2WyPmSy6u72iOX76QAAABNJREFUeNpiYEADjGiQCRUCBBgAAXAAGf0Y8r4AAAAASUVORK5CYII=');
      }
    }
  }
</style>
