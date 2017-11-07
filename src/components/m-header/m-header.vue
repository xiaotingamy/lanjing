<template>
  <div class="header">
    <div class="inner border-bottom-1px">
      <p class="title">{{title}}</p>
      <div class="back" @click.stop="linkTo(backUrl)">
        <div class="extend">
          <span class="lnr lnr-chevron-left"></span>
        </div>
      </div>
      <div class="operate"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '微银理财'
      },
      backUrl: {
        type: String,
        default: ''
      }
    },
    methods: {
      linkTo(backUrl) {
        if (backUrl) {
          this.$router.push({
            path: backUrl
          })
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .header
    position absolute
    top 0
    left 0
    width 100%
    height 44px
    background: $color-background-w
    z-index 101
    .inner
      position relative
      height 100%
      border-bottom-1px(#ccc)
      .title
        text-align center
        color: $color-text
        line-height 44px
      .back
        position absolute
        top 0
        left 15px
        .extend
          extend-click()
          .lnr
            color $color-text
            font-size $font-size-large
            line-height: 44px
</style>
