<template>
  <div class="panel border-bottom-1px">
    <h4 class="border-bottom-1px">{{title}}</h4>
    <div class="text" v-html="text"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .panel
    padding 0 15px
    border-bottom-1px($color-border)
    background $color-background-w
    h4
      height 54px
      font-size $font-size-large
      color $color-text
      line-height 54px
      border-bottom-1px($color-border)
    .text
      padding 15px 0
      line-height 22px
      font-size $font-size-medium
      color $color-text-n
</style>
