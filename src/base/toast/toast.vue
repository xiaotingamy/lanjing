<template>
  <transition name="fade">
    <div class="toast" v-show="showFlag">
      <span class="toast-text">
        {{text}}
      </span>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      delay: {
        type: Number,
        default: 2000
      },
      text: {
        type: String,
        default: '气泡提示'
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.hide()
        }, this.delay)
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .toast
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 998
    background transparent
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.3s
    &.fade-enter, &.fade-leave-to
      opacity 0
    .toast-text
      padding: 6px 10px
      border-radius: 4px
      background-color: rgba(0,0,0,.7)
      color $color-background-w
      font-size $font-size-medium
</style>
