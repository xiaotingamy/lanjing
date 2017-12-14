<template>
  <scroll ref="scroll" class="user-center">
    <div class="user-center-content">
      <div class="top-box border-bottom-1px">
        <div class="user-avatar">
          <img src="http://q.qlogo.cn/qqapp/101330628/DB1BD8C2CD3E2EB9DF05BD790F4A1BDF/100" />
        </div>
        <p class="user-name">mumy</p>
      </div>
      <split></split>
      <div class="bind-remark border-bottom-1px">
        <div class="text-box">
          <p class="lnr lnr-smartphone"></p>
          <p class="text">找不到订单或优惠券？绑定手机号试试</p>
        </div>
        <div class="operate-btn">立即绑定</div>
      </div>
      <split></split>
      <div class="md-cell border-bottom-1px">
        <div class="title border-bottom-1px">
          <p>我的订单</p>
          <div class="right">
            <span>查看订单</span>
            <span class="lnr lnr-chevron-right"></span>
          </div>
        </div>
        <div class="bd">
          <div class="state-list">
            <div class="state-item">
              <p class="icon icon-topay"></p>
              <p class="text">待付款</p>
            </div>
            <div class="state-item">
              <p class="icon icon-delivery"></p>
              <p class="text">待发货</p>
            </div>
            <div class="state-item">
              <p class="icon icon-getpackage"></p>
              <p class="text">待收货</p>
            </div>
            <div class="state-item">
              <p class="icon icon-finish"></p>
              <p class="text">已完成</p>
            </div>
          </div>
        </div>
      </div>
      <split></split>
      <div class="list-link border-bottom-1px">
        <h4>购物车</h4>
        <div class="right">
          <span class="quantity">8</span>
        </div>
      </div>
      <split></split>
      <div class="list-link border-bottom-1px">
        <h4>我的优惠券</h4>
        <div class="right">
          <span class="lnr lnr-chevron-right"></span>
        </div>
      </div>
      <split></split>
      <div class="list-link border-bottom-1px">
        <h4>地址管理</h4>
        <div class="right">
          <span class="lnr lnr-chevron-right"></span>
        </div>
      </div>
      <div class="contact-box">
        <p class="tel">客服热线：400-875-9966</p>
        <p class="time">9:00~18:00（工作日）</p>
      </div>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Split from 'components/split/split'
  import Scroll from 'base/scroll/scroll'
  export default {
    components: {
      Split,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .user-center
    position absolute
    top 0
    bottom 49px
    width 100%
    overflow hidden
    .user-center-content
      .top-box
        position: relative
        display: flex
        flex-direction: column
        align-items: center
        padding: 25px 0
        box-sizing: border-box
        border-bottom-1px($color-border)
        background $white
        .user-avatar
          width: 90px
          height: 90px
          border-radius: 90px
          box-shadow: 0 0 10px rgba(0,0,0,0.6)
          margin-bottom: 12px
          img
            width: 90px
            height: 90px
            border-radius: 90px
        .user-name
          font-size $font-size-medium
      .bind-remark
        position: relative
        background: $white
        padding: 15px
        font-size: $font-size-medium
        display: flex
        justify-content: space-between
        margin-bottom: 10px
        border-bottom-1px($color-border)
        .text-box
          flex 1
          display flex
          align-items center
          .lnr
            font-size $font-size-medium
            color #999999
            margin-right 5px
          .text
            font-size $font-size-medium
        .operate-btn
          flex 0 0 60px
          border: 1px solid $color-theme
          color: $color-theme
          font-size: $font-size-small
          border-radius: 3px
          padding: 5px 0;
          text-align center
      .md-cell
        position relative
        border-bottom-1px($color-border)
        padding 0 15px
        background $white
        .title
          display flex
          justify-content space-between
          align-items center
          font-size $font-size-medium
          border-bottom-1px($color-border)
          height 45px
          .right
            color #999999
            .lnr
              font-size $font-size-small
        .bd
          padding 15px 0 20px
          .state-list
            display flex
            align-items center 
            justify-content space-around
            .state-item
              flex 1
              display flex
              align-items center
              flex-direction column
              font-size $font-size-small
              .text
                margin-top 5px
              .icon
                width 30px
                height 30px
                background-size 30px
                &.icon-topay
                  bg-image('icon-topay')
                &.icon-delivery
                  bg-image('icon-delivery')
                &.icon-getpackage
                  bg-image('icon-getpackage')
                &.icon-finish
                  bg-image('icon-finish')
      .list-link
        display flex
        justify-content space-between
        align-items center
        padding 0 15px
        height 45px
        background $color-background-w
        border-bottom-1px($color-border)
        h4
          flex 1
          font-size $font-size-medium
        .right
          span
            display block
            font-size $font-size-medium
            &.lnr-chevron-right
              color #ccc
            &.quantity
              padding: 0 8px
              border-radius: 6px
              background: #98a1aa
            color: #fff
      .contact-box
        padding 12px 0
        text-align center
        .tel
          font-size 13px
          color $color-text-n
        .time
          font-size $font-size-small
          color $color-text-l
          margin-top 6px
</style>
