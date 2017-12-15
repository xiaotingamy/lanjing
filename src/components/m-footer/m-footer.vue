<template>
  <div class="m-footer">
    <ul class="border-top-1px">
      <router-link tag="li" to="/index/recommend">
        <span class="lnr lnr-diamond"></span>
        <span class="text">首页</span>
      </router-link>
      <router-link tag="li" to="/cart">
        <span class="lnr lnr-cart"></span>
        <span class="text">购物车</span>
      </router-link>
      <router-link tag="li" to="/user">
        <span class="lnr lnr-user"></span>
        <span class="text">我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .m-footer
    position fixed
    bottom 0
    left 0
    width 100%
    background $color-background
    ul
      display flex
      align-items center
      width 100%
      height 49px
      border-top-1px(rgba(230,230,230,1))
      li
        flex 1
        text-align center
        display flex
        flex-flow column nowrap
        &.router-link-active
          span
            color $color-theme
        span
          display block
          color $color-text-footer
          &.lnr
            font-size $font-size-large-xx
          &.text
            font-size $font-size-small-s
            margin-top 4px
</style>
