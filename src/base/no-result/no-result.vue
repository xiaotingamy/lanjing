<template>
  <div class="no-result">
    <div class="no-result-icon"></div>
    <p class="no-result-text">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .no-result
    text-align center
    .no-result-icon
      width 62px
      height 62px
      margin 0 auto
      bg-image('no-result')
      background-size 62px
    .no-result-text
      margin-top 20px
      font-size $font-size-medium
      color $color-text-n
</style>
