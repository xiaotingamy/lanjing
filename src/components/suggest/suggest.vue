<template>
  <scroll ref="suggest" class="suggest">
    <ul class="suggest-list">
      <li class="product-item">
        <div class="image-header">
          <img class="product-image" src="">
        </div>
        <div class="product-intro">
          <p class="name">
            良品铺子零食大礼包组合一整箱好吃的混合装吃货膨化食品小吃批发
          </p>
          <div class="cell">
            <p class="price">￥785.00</p>
          </div>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import NoResult from 'base/no-result/no-result'
//  import {ERR_OK} from 'api/config'
  export default {
    components: {
      Scroll,
      Loading,
      NoResult
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .suggest
    height 100%
    overflow hidden
    .suggest-list
      padding 0 15px
      .product-item
        position relative
        display flex
        background $color-background-w
        margin-bottom 10px
        &:after
          content ''
          position absolute
          left 0
          top 0
          width 200%
          height 200%
          -webkit-transform scale(0.5)
          transform scale(0.5)
          -webkit-transform-origin 0 0
          transform-origin 0 0
          border 1px solid #e6e6e6
          box-sizing border-box
          background #fff
        .image-header
          position relative
          width 120px
          height 120px
          flex 0 0 120px
          z-index 1
          .product-image
            width 100%
            height 100%
        .product-intro
          position relative
          flex 1
          padding 10px
          z-index 1px
          display: flex
          flex-direction: column
          justify-content: space-between
          z-index 1
          .name
            font-size $font-size-small
            color $color-text
            line-height 1.6
            display -webkit-box
            overflow hidden
            text-overflow ellipsis
            -webkit-box-orient vertical
            -webkit-line-clamp 2
          .cell
            display flex
            justify-content space-between
            align-items center
            margin-top 20px
            .price
              font-size $font-size-small
              color $color-theme
              line-height 1

</style>
