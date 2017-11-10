<template>
  <div class="cartcontrol">
    <p class="btn-minus">
      <span class="btn minus"></span>
    </p>
    <p class="btn-input">
      <input type="tel" value="1">
    </p>
    <p class="btn-plus">
      <span class="btn plus"></span>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .cartcontrol
    display flex
    align-items center
    .btn
      display block
      height 30px
      position relative
      &:after, &:before
        position absolute
        top 14.25px
        left 10.88px
        border-bottom 2px solid #878787
        width 12px
        height 0
        content ' '
      &.plus
        &:before
          transform rotate(90deg)
    .btn-minus
      background #f1f1f1
      width 33px
      &.off
        background #f9f9f9
        .btn
          &:after, &:before
            border-color #ddd
    .btn-input
      background #f1f1f1
      width 39px
      border-left 3px solid #fff
      border-right 3px solid #fff
      input
        height 30px
        width 100%
        text-align center
        font-size 14px
        background transparent
    .btn-plus
      width 33px
      background #f1f1f1

</style>
