<template>
  <div id="app" @touchmove.prevent>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MFooter from 'components/m-footer/m-footer'
  export default {
    components: {
      MFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
