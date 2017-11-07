<template>
  <div class="progress-bar">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      this._offset(this.percent)
    },
    methods: {
      _offset(width) {
        this.$refs.progress.style.width = `${width}%`
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .progress-bar
    .bar-inner
      position: relative
      width 70px
      height 4px
      border-radius 2px
      background: rgba(216,216,216,1)
      .progress
        position: absolute
        height: 100%
        border-radius 2px
        background: $color-link

</style>
