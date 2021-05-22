<template>
  <div>
    <hr />
    <div>© 2021 - <a href="https://balint.cloud">balint.cloud</a></div>
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
  hr {
    border-bottom: #039 1px solid;
    border-top: #9cceff 1px solid;
  }
  div {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
</style>
