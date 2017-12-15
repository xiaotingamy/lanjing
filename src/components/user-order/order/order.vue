<template>
  <div class="order-wrapper">
    <order-tab></order-tab>
    <router-view :key="key"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import OrderTab from 'components/user-order/order-tab/order-tab'
  export default {
    components: {
      OrderTab
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .order-wrapper
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background $white
    z-index 1
</style>