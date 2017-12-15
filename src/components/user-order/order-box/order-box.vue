<template>
  <div class="order-box">
    <order-list :order-state="orderState"></order-list>
  </div>
</template>
<script type="text/ecmascript-6">
  import OrderList from 'components/user-order/order-list/order-list'
  export default {
    data() {
      return {
        orderState: ''
      }
    },
    created() {
      this.orderState = this.$route.params.state
    },
    components: {
      OrderList
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .order-box
    position fixed
    top 44px
    right 0
    left 0
    bottom 0
    background $white
    z-index 1
</style>