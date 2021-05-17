<template>
  <div class="banner"></div>
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
  @function strip-units($number) {
    @return $number / ($number * 0 + 1);
  }
  @mixin keyframes($animationName, $maxPx) {
    $speed: 5;
    $max: strip-units($maxPx);
    $steps: round($max / $speed)-1;
    @keyframes #{$animationName} {
      @for $i from 0 through $steps {
        $percentage: $i / $steps;
        $keyframe: percentage($percentage);
        #{$keyframe} {
            transform: translateY(#{$i * $max}px);
        }
      }
    }
  }
  @include keyframes(bannerAnim, 56px);
  @include keyframes(itemAnim, 24px);
  @mixin animProps($animName, $speed, $delay) {
    position: absolute;
    content: '';
    width: 100%;
    height: inherit;
    background: white;
    animation: $speed linear $delay 1 $animName;
    animation-fill-mode: forwards;
  }

  .banner {
    width: 302px;
    height: 56px;
    background-image: url(../assets/logo.png);
    overflow: hidden;
    position: relative;

    &::before {
      @include animProps(bannerAnim, 4s, 0s);
    }
  }
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
      position: relative;
      overflow: hidden;
      
      &:hover, &:active {
        padding-top: 3px;
        text-decoration: underline;
      }

      &:nth-of-type(1) {
        &::after {
          @include animProps(itemAnim, 500ms, 200ms);
        }
      }
      &:nth-of-type(2) {
        &::after {
          @include animProps(itemAnim, 400ms, 250ms);
        }
      }
      &:nth-of-type(3) {
        &::after {
          @include animProps(itemAnim, 300ms, 300ms);
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
