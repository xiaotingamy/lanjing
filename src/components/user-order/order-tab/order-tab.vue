<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/user/order/all">
      <span class="tab-link">全部</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user/order/paying">
      <span class="tab-link">待付款</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user/order/payed">
      <span class="tab-link">待发货</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user/order/delivering">
      <span class="tab-link">待收货</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user/order/finished">
      <span class="tab-link">已完成</span>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
    .tab
      display: flex
      height: 44px
      line-height: 44px
      font-size: $font-size-medium
      .tab-item
        flex: 1
        text-align: center
        .tab-link
          padding-bottom: 5px
          color: $color-text-l
        &.router-link-active
          .tab-link
            color: $color-theme
            border-bottom: 2px solid $color-theme
</style>