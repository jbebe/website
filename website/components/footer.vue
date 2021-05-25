<template>
  <div>
    <hr />
    <div>© 2021 - <a href="https://balint.cloud">balint.cloud</a> - <a href="https://github.com/jbebe/website">View source</a></div>
  </div>
</template>

<style scoped lang="scss">
  @import '../assets/styles/colors';

  hr {
    border: none;
    height: 5px;
    border-top: $light-gray 1px solid;
    border-bottom: $light-gray 1px solid;

    &::before {
      content: ' ';
      display: block;
      height: 1px;
      border-bottom: $light-gray 1px solid;
      padding-bottom: 1px;
    }
  }
  div {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
</style>
