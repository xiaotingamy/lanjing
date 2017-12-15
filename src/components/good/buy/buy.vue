<template>
  <transition name="slide">
    <div class="buy">
      <scroll ref="scroll" class="buy-wrapper">
        <div class="buy-content">
          <div class="address-wrapper">
            <div class="add-address" style="display: none">
              <div class="icon-add"></div>
              <p class="text">新增收货地址</p>
              <span class="lnr lnr-chevron-right"></span>
            </div>
            <div class="default-address">
              <div class="address-bd">
                <div class="icon-local"></div>
                <div class="text">
                  <div class="name">
                    <p>收货人：郭晓婷</p>
                    <p>13758141861</p>
                  </div>
                  <div class="addr">
                    浙江省杭州市江干区景芳3409室
                  </div>
                </div>
              </div>
              <span class="lnr lnr-chevron-right"></span>
            </div>
          </div>
          <split></split>
          <div class="good-list-wrapper">
            <div class="title">
              <p class="lnr lnr-diamond"></p>
              <p>鲸选</p>
            </div>
            <ul class="good-list">
              <li>
                <good-item></good-item>
              </li>
            </ul>
            <div class="extra-box">
              <div class="cell border-bottom-1px">
                <div class="c-title">配送方式</div>
                <p class="c-text">免运费</p>
              </div>
              <div class="cell border-bottom-1px input-cell">
                <div class="c-title">留言</div>
                <div class="input-container">
                  <input type="text" name="message" placeholder="点击给商家留言"/>
                </div>
              </div>
              <div class="cell border-bottom-1px">
                <div class="c-title">合计</div>
                <p class="c-text red">￥123.00</p>
              </div>
            </div>
            <div class="service-box border-bottom-1px">
              <div class="item border-right">
                <p class="lnr lnr-bubble"></p>
                <p>联系客服</p>
              </div>
              <div class="item">
                <p class="lnr lnr-phone-handset"></p>
                <p>拨打电话</p>
              </div>
            </div>
          </div>
          <split></split>
          <div class="amount-box border-bottom-1px">
			    	<div class="amount-cell">
			    		<p class="title">商品总额</p>
			    		<p class="text">￥123.00</p>
			    	</div>
			    	<div class="amount-cell mt">
			    		<p class="title">运费</p>
			    		<p class="text">+ ￥0.00</p>
			    	</div>
			    </div>
        </div>
      </scroll>
      <div class="buy-footer">
        <div class="left">
          <p>合计：<span>￥439.00</span></p>
        </div>
        <div class="btn">提交订单</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Split from 'components/split/split'
  import GoodItem from 'components/good-item/good-item'
  export default {
    components: {
      Scroll,
      Split,
      GoodItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .buy
    position: fixed
    z-index: 2
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
    .buy-wrapper
      position absolute
      top 0
      bottom 55px
      width 100%
      overflow hidden
      .buy-content
        padding-bottom 10px
        .address-wrapper
          padding: 15px
          background-color: #fff
          bg-image('color-line')
          background-repeat repeat-x
          background-size: auto 2px
          background-position: bottom
          .add-address
            display flex
            align-items center
            position relative
            .icon-add
              width 40px
              height 40px
              bg-image('icon-add')
              background-size 40px
              margin-right 10px
            .text
              font-size $font-size-medium
            .lnr-chevron-right
              position absolute
              top 12px
              right 0px
              font-size $font-size-medium
              color #999
          .default-address
            height: 100%
            display: flex
            align-items: center
            justify-content: space-between
            .address-bd
              flex 1
              display flex
              align-items start
              margin-right 8px
              .icon-local
                width 17px
                height 17px
                bg-image('icon-local')
                background-size 17px
                margin-right 10px
                flex 0 0 17px
              .text
                flex 1
                font-size $font-size-medium
                .name
                  display: flex
                  align-items: center
                  justify-content: space-between
                  line-height: 1
                  color: #333
                .addr
                  color: #999
                  margin-top: 8px
                  line-height 1.4
            .lnr-chevron-right
              display block
              font-size $font-size-medium
              color #999
        .good-list-wrapper
          position relative
          background $white
          .title
            height: 50px
            padding: 0 15px
            display: flex
            align-items: center
            justify-content flex-start
            p
              font-size $font-size-medium-x
              line-height 1
              &.lnr-diamond
                flex: 0 0 18px
                font-size $font-size-large
                color #999999
                margin-right 5px
          .good-list
            list-style none 
            overflow hidden
            li
              margin-bottom 10px
              &:last-child
                margin-bottom 0
              .good-item
                background: #fafafa
                padding: 6px 15px
                display: flex
                align-items: start
                .img
                  display: block
                  width: 90px
                  height: 90px
                  flex: 0 0 90px
                  margin-right: 10px
                  img 
                    display: block
                    width: 100%
                    height: 100%
                .text-box
                  flex 1
                  .name-box
                    display: flex
                    align-items: flex-start
                    justify-content: space-between
                    font-size: 14px
                    color: #333
                    line-height: 1.6
                    .name
                      display: -webkit-box
                      overflow: hidden
                      text-overflow: ellipsis
                      -webkit-box-orient: vertical
                      -webkit-line-clamp: 2
                      margin-right: 15px
                  .sku-box
                    display: flex
                    align-items: flex-start
                    justify-content: space-between
                    font-size: 12px
                    color: #999
                    margin-top: 10px
                    .quantity
                      text-align: right
                      flex: 1
          .extra-box
            margin-left 15px
            .cell
              display flex
              justify-content space-between
              align-items center
              height 42px
              padding-right 15px
              border-bottom-1px($color-border)
              &.input-cell
                justify-content flex-start
                .c-title
                  flex 0 0 80px
                .input-container
                  flex 1
                  width 100%
                  input
                    font-size $font-size-medium
                    width 100%
              .c-title
                font-size $font-size-medium
                flex 1
              .c-text
                font-size $font-size-small
                color #999
                &.red
                  color $color-theme
          .service-box
            display flex
            align-items center
            border-bottom-1px($color-border)
            height 42px
            .item
              flex 1
              display flex
              justify-content center
              align-items center
              font-size $font-size-medium
              color $color-link
              &.border-right
                border-right: 1px solid $color-border
              .lnr
                font-size $font-size-medium-x
                margin-right 5px
        .amount-box
          position: relative
          padding: 10px 15px
          background: $white
          border-bottom-1px($color-border)
          .amount-cell
            display: flex
            align-items: center
            justify-content: space-between
            font-size: $font-size-medium
            &.mt
              margin-top 8px
            .title
              color #000
            .text
              color #999
    .buy-footer
      position absolute
      bottom 0
      left 0
      width 100%
      height 55px
      background $color-background-w
      display flex
      align-items center
      .left
        flex 1
        font-size $font-size-medium
        padding 0 10px
        p
          text-align right
          span
            color $color-theme
      .btn
        text-align center
        width 110px
        line-height 55px
        color #fff
        font-size $font-size-medium
        background $color-theme 
</style>
