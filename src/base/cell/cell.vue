<template>
  <div class="cell">
    <div class="cell-left">
      <slot name="left"></slot>
    </div>
    <div class="cell-wrapper">
      <div class="cell-content">
        <slot>
        </slot>
      </div>
    </div>
    <div class="cell-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .cell
    position relative
    background $color-background-w
    box-sizing border-box
    min-height 48px
    display: block
    overflow hidden
    text-decoration none
    .cell-left
      position: absolute
      height: 100%
      left: 0
      transform: translate3d(-100%, 0, 0)
      transition: transform 150ms ease-in-out
    .cell-right
      position: absolute
      height: 100%
      right: 0
      top: 0
      transform: translate3d(100%, 0, 0)
      transition: transform 150ms ease-in-out
    .cell-wrapper
      display: flex
      align-items: center
      box-sizing: border-box
      font-size: 16px
      min-height: 48px
      overflow: hidden
      width: 100%
      transition: transform 150ms ease-in-out
      .cell-content
        flex 1
      .arrow-right::after
        border: solid 2px #c8c8cd
        border-bottom-width: 0
        border-left-width: 0
        content: " "
        top:50%
        right:20px
        position: absolute
        width:5px
        height:5px
        transform: translateY(-50%) rotate(45deg)


</style>
