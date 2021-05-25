<template>
  <div>
    <div class="banner"></div>
    <div class="menu">
      <div 
        v-for="item in menuItems" 
        :key="item.text" 
        v-bind:class="{ item: true, active: currentRoute == item.href }"
      >
        <div class="start"></div>
        <NuxtLink :to="item.href" class="text">{{ item.text }}</NuxtLink>
        <div class="end"></div>
      </div>
    </div>
  </div>
</template>

<script>
import routing from '../library/routes.generated'

function getParentPath(url) {
  return url.replace(/(\/[^\/]+).*/g, '$1')
}

export default {
  name: 'Header',
  data: () => ({
    menuItems: routing,
    currentRoute: '/'
  }),
  created () {
      this.currentRoute = getParentPath(this.$router.currentRoute.path)
  },
  watch: {
    $route() {
      this.currentRoute = getParentPath(this.$router.currentRoute.path)
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../assets/styles/animation';
  
  @include keyframes(bannerAnim);
  @include keyframes(itemAnim);
  
  .banner {
    width: 100%;
    height: 56px;
    background: #d6e7ff url('../assets/images/logo.png') no-repeat 0 0;
    overflow: hidden;
    position: relative;

    &::before {
      @include animProps(bannerAnim, 3s, 0s);
    }
  }
  .menu {
    display: flex;
    margin-top: 4px;
    font-family: 'DeterminationSansRegular', Arial, Verdana, Tahoma;
    font-size: 16px;
    line-height: 15px;
    height: calc(24px + 3px);

    .item {
      display: flex;
      height: 24px;
      position: relative;
      overflow: hidden;
      
      &:hover, &:active, &.active {
        padding-top: 3px;
        text-decoration: underline;
      }

      &:nth-of-type(1) {
        &::after {
          @include animProps(itemAnim, 200ms, 200ms);
        }
      }
      &:nth-of-type(2) {
        &::after {
          @include animProps(itemAnim, 100ms, 250ms);
        }
      }
      &:nth-of-type(3) {
        &::after {
          @include animProps(itemAnim, 150ms, 300ms);
        }
      }

      .start {
        width: 16px;
        height: inherit;
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
