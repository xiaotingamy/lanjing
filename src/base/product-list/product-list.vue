<template>
  <div class="product-list" :class="typeClass">
    <ul>
      <li>
        <div class="product-item">
          <div class="image-header">
            <img class="product-image" src="">
          </div>
          <div class="product-intro">
            <p class="name">
              良品铺子零食大礼包组合一整箱好吃的混合装吃货膨化食品小吃批发
            </p>
            <div class="cell">
              <p class="price">￥785.00</p>
              <div class="lnr lnr-cart"></div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="product-item">
          <div class="image-header">
            <img class="product-image" src="">
          </div>
          <div class="product-intro">
            <p class="name">
              良品铺子零食大礼包组合一整箱好吃的混合装吃货膨化食品小吃批发
            </p>
            <div class="cell">
              <p class="price">￥785.00</p>
              <div class="lnr lnr-cart"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        products: {
          type: Array,
          default: []
        },
        mold: {
          type: String,
          default: ''
        }
      },
      computed: {
        typeClass() {
          return {
            'large': this.mold === 'large',
            'grid': this.mold === 'grid',
            'cell': this.mold === 'cell'
          }
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .product-list
    position: relative
    &.large
      li
        margin-bottom 15px
        .product-item
          background $color-background-w
          .image-header
            display block
            position relative
            width 100%
            height 0
            padding-top 100%
            .product-image
              position absolute
              left 0
              top 0
              width 100%
              height 100%
          .product-intro
            padding 10px
            .name
              font-size $font-size-medium
              color $color-text
              line-height 1
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .cell
              display flex
              justify-content space-between
              align-items center
              margin-top 6px
              .price
                font-size $font-size-large
                color $color-theme
              .lnr
                font-size $font-size-large-x
                color $color-theme

    &.grid
      ul
        display flex
        justify-content space-between
        flex-wrap wrap
        li
          display block
          width 48%
          margin-bottom 15px
          .product-item
            background $color-background-w
            .image-header
              display block
              position relative
              width 100%
              height 0
              padding-top 100%
              .product-image
                position absolute
                left 0
                top 0
                width 100%
                height 100%
            .product-intro
              padding 10px
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
                margin-top 15px
                .price
                  font-size $font-size-small
                  color $color-theme
                  line-height 1
                .lnr
                  font-size $font-size-medium-x
                  color $color-theme


    &.cell
      li
        margin-bottom 15px
        .product-item
          position relative
          display flex
          background $color-background-w
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
              .lnr
                font-size $font-size-medium-x
                color $color-theme

</style>
