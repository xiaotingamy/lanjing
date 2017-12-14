<template>
  <transition name="up">
    <div class="sku-wrapper" v-show="showFlag">
      <div class="sku-content">
        <div class="blank" @click="hide"></div>
        <div class="sku-main">
          <div class="sku-box">
            <div class="header-box">
              <div class="good border-bottom-1px">
                <div class="image">
                  <p>
                    <img src="http://yanxuan.nosdn.127.net/9a3b1a674b27f572b05ae4e736ef5e82.png?quality=90&thumbnail=200x200&imageView"/>
                  </p>
                </div>
                <div class="text">
                  <h3 class="title">珠海长隆企鹅/横琴湾/马戏酒店度假套餐 2天1晚</h3>
                  <p class="price">￥98</p>
                </div>
                <div class="close" @click="hide"><span class="lnr lnr-cross-circle"></span></div>
              </div>
            </div>
            <div class="content-box">
              <div class="cell border-bottom-1px">
                <h2>选择规格</h2>
                <ul>
                  <li class="sel">200g</li>
                  <li>300g</li>
                  <li class="disable">1000g</li>
                </ul>
              </div>
              <div class="cell">
                <div class="quantity">
                  <h2>
                    <p>购买数量</p>
                    <p class="sub">剩余123件</p>
                  </h2>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol></cartcontrol>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-box">
              <div class="sku-btns">
                <div class="btn addcart">
                  加入购物车
                </div>
                <div class="btn gobuy">
                  立即购买
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import Cartcontrol from 'components/cartcontrol/cartcontrol'
  export default {
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
      }
    },
    components: {
      Cartcontrol
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .sku-wrapper
    position: fixed
    z-index: 2
    top 0
    bottom 0
    left 0
    right 0
    &.up-enter-active, &.up-leave-active
      transition all 0.3s
    &.up-enter, &.up-leave-to
      transform translate3d(0, 100%, 0)
    .sku-content
      display flex
      flex-direction column
      height 100%
      .blank
        flex 1
        width 100%
      .sku-main
        width 100%
        background $color-background-w
        height 70%
        overflow: visible
        .sku-box
          display flex
          flex-direction column
          width 100%
          height 100%
          .header-box
            position relative
            .good
              position relative
              display flex
              padding 12px
              border-bottom-1px($color-border)
              .close
                position absolute
                top 15px
                right 15px
                .lnr
                  font-size 20px
                  color #999
              .image
                flex 0 0 84px
                width: 84px
                height: 62px
                margin-right: 12px
                position: relative
                p
                  position absolute
                  bottom 0
                  width 84px
                  height 84px
                  padding 1px
                  border-radius 4px
                  box-sizing border-box
                  display flex
                  align-items center
                  justify-content center
                  overflow hidden
                  background #fff
                  img
                    width 82px
                    border-radius 4px
              .text
                flex 1
                padding-right 30px
                display flex
                justify-content center
                flex-direction column
                .title
                  font-size $font-size-medium
                  display -webkit-box
                  word-break break-all
                  -webkit-line-clamp 1
                  -webkit-box-orient vertical
                  overflow hidden
                  line-height 1.4
                .price
                  font-size $font-size-medium
                  color $color-theme
                  margin-top 10px
                  font-weight bold
          .content-box
            flex: 1
            height: 100%
            padding: 12px 0 20px
            overflow: hidden
            overflow-y: auto
            .cell
              padding: 12px 0
              margin: 0 12px
              border-bottom-1px($color-border)
              h2
                font-weight normal
                font-size: $font-size-medium
                padding-bottom: 12px
                line-height: 1
                color: #333
              ul
                margin-top -9px
                list-style none 
                li
                  display: inline-block
                  height: 30px
                  line-height: 30px
                  text-align: center
                  vertical-align: middle
                  background: #e8e8e8
                  border-radius: 6px
                  padding: 0 10px
                  box-sizing: border-box
                  margin: 9px 9px 0 0
                  cursor: pointer
                  color: #333
                  font-size: 13px
                  &.sel
                    color #ffffff
                    background $color-theme
                  &.disable
                    color #999
                    background #f7f7f7
              .quantity
                display flex
                justify-content space-between
                align-items center
                h2
                  flex: 1
                  width: 100%
                  padding: 0
                  .sub
                    font-size $font-size-small
                    color #999
                    margin-top 10px
          .bottom-box
            .sku-btns
              display flex
              .btn
                flex: 1
                width: 100%
                font-size $font-size-medium
                color #ffffff
                height 42px
                line-height 42px
                text-align center
                &.addcart
                  background #f85
                &.gobuy
                  background #f44
</style>
