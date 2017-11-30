<template>
  <div class="shopcart-wrapper">
    <scroll ref="cartList" class="shopcart-content">
      <div>
        <split></split>
        <div class="cart-group border-bottom-1px">
          <div class="head">
            <div class="left">
              <div class="checkbox"><input type="checkbox" v-model="allChecked"></div>
              <span class="title">蓝鲸小店</span>
            </div>
            <div class="right">
              <span class="operate">{{operateText}}</span>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="check">
                <input type="checkbox">
              </div>
              <div class="content">
                <div class="img">
                  <img src="">
                </div>
                <div class="text-box">
                  <div class="name-box">
                    <p class="name">良品铺子零食大礼包组合一整箱好吃的混合装吃货膨化食品小吃批发</p>
                    <!--<div class="cartcontrol-wrapper">-->
                      <!--<cartcontrol></cartcontrol>-->
                    <!--</div>-->
                    <p class="sku"> CC 极光</p>
                  </div>
                  <div class="price-box">
                    <p class="price">￥439.00</p>
                    <p class="quantity">x10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <div class="cart-bottom">
      <div class="left border-top-1px">
        <div class="checkbox-wrapper">
          <div class="checkbox">
            <input type="checkbox" v-model="allChecked">
          </div>
          <span class="title">全选</span>
        </div>
        <div class="total-amount">
          <p class="red">合计：￥439.00</p>
          <p style="color: #999;">不含运费</p>
        </div>
      </div>
      <div class="submit-btn">结算</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Cartcontrol from 'components/cartcontrol/cartcontrol'
  import Split from 'components/split/split'
  import Scroll from 'base/scroll/scroll'
  export default {
    data() {
      return {
        allChecked: false,
        checkItems: [],
        editable: false
      }
    },
    computed: {
      operateText() {
        return this.editable ? '完成' : '编辑'
      }
    },
    components: {
      Cartcontrol,
      Split,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .shopcart-wrapper
    position absolute
    top 0
    bottom 49px
    width 100%
    overflow hidden
    .shopcart-content
      position absolute
      top 0
      bottom 50px
      width 100%
      .cart-group
        border-bottom-1px($color-border)
        background #fff
        margin-bottom 10px
        .head
          height 45px
          padding 0 15px
          display flex
          align-items center
          justify-content space-between
          .left
            flex 1
            display flex
            align-items center
            .checkbox
              margin-right 5px
            .title
              font-size $font-size-medium
          .right
            .operate
              font-size $font-size-medium
              color $color-text-n
        .list
          overflow hidden
          .item
            display flex
            align-items center
            background $color-background
            margin-bottom 10px
            .check
              padding-left 15px
              margin-right 5px
            .content
              display flex
              align-items center
              padding: 6px 15px 6px 5px
              .img
                display block
                width 90px
                height 90px
                flex 0 0 90px
                margin-right 10px
                img
                  display block
                  width 100%
                  height 100%
              .text-box
                flex 1
                .name-box
                  font-size $font-size-medium
                  color $color-text
                  line-height 1.6
                  .name
                    display: -webkit-box
                    overflow: hidden
                    text-overflow: ellipsis
                    -webkit-box-orient: vertical
                    -webkit-line-clamp: 2
                  .sku
                    margin-top 3px
                    color $color-text-n
                    font-size $font-size-small
                .price-box
                  display flex
                  align-items center
                  justify-content space-between
                  font-size $font-size-medium
                  color $color-text-l
                  margin-top 9px
                  .price
                    color $color-theme



    .cart-bottom
      position fixed
      bottom 49px
      left 0px
      width 100%
      height 50px
      background $color-background-w
      display flex
      justify-content space-between
      .left
        padding-right: 10px
        border-top-1px($color-border)
        padding-left: 15px
        display flex
        align-items center
        justify-content space-between
        flex 1
        height 50px
        .checkbox-wrapper
          display flex
          align-items center
          .checkbox
            margin-right 5px
          .title
            font-size $font-size-medium
            color $color-text-n
        .total-amount
          font-size $font-size-small
          text-align right
          line-height 1.6
          color $color-text-l
          .red
            color $color-theme
      .submit-btn
        width 110px
        background $color-theme
        color #fff
        text-align center
        line-height 50px

</style>
