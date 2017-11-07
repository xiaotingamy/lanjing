<template>
  <div class="split border-bottom-1px">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .split
    position relative
    width:100%
    height 10px
    border-bottom-1px($color-border)
    background-color: $color-background
    z-index 101
</style>
