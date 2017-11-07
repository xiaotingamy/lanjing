<template>
  <scroll ref="scroll" class="user-center">
    <div class="user-center-content">
      <div class="top-box border-bottom-1px">
        <div class="operate">
          <div class="lnr lnr-menu-circle"></div>
          <div class="message">
            <div class="lnr lnr-bubble"></div>
            <span class="dot"></span>
          </div>
        </div>
        <div class="yesterday-income">
          <div class="title">
            <span>昨日收益(元)</span>
            <span class="lnr lnr-question-circle"></span>
          </div>
          <div class="text">
            30.81
          </div>
        </div>
        <div class="data-item">
          <div class="item">
            <p class="title">总资产(元)</p>
            <p class="text">10064.12</p>
          </div>
          <div class="item">
            <p class="title">累计投资(元)</p>
            <p class="text">20816.48</p>
          </div>
          <div class="item">
            <p class="title">累计收益(元)</p>
            <p class="text">135.28</p>
          </div>
        </div>
      </div>
      <split></split>
      <div class="remain border-bottom-1px">
        <p class="remain-amount">余额(元): <span>1303.36</span></p>
        <div class="operate-box">
          <div class="btn mr">
            <span class="lnr lnr-plus-circle"></span>
            <span>充值</span>
          </div>
          <div class="btn">
            <span class="lnr lnr-circle-minus"></span>
            <span>提现</span>
          </div>
        </div>
      </div>
      <split></split>
      <ul class="list-link">
        <li class="border-bottom-1px">
          <h4><span class="lnr lnr-earth"></span><span>我的定期</span></h4>
          <span class="lnr lnr-chevron-right"></span>
        </li>
        <li class="border-bottom-1px">
          <h4><span class="lnr lnr-earth"></span><span>我的卡券</span></h4>
          <span class="lnr lnr-chevron-right"></span>
        </li>
        <li class="border-bottom-1px">
          <h4><span class="lnr lnr-mic"></span><span>我的银行卡</span></h4>
          <span class="lnr lnr-chevron-right"></span>
        </li>
      </ul>
      <split></split>
      <ul class="list-link">
        <li class="border-bottom-1px">
          <h4><span class="lnr lnr-mic"></span><span>邀请好友</span></h4>
          <span class="lnr lnr-chevron-right"></span>
        </li>
        <li class="border-bottom-1px">
          <h4><span class="lnr lnr-mic"></span><span>活动中心</span></h4>
          <span class="lnr lnr-chevron-right"></span>
        </li>
      </ul>
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
        padding-bottom 20px
        background $color-background-w
        border-bottom-1px($color-border)
        .operate
          position absolute
          top 0
          left 0
          width 100%
          height 45px
          display flex
          justify-content space-between
          align-items center
          padding 0 15px
          box-sizing border-box
          .lnr
            font-size $font-size-large-x
            color $color-text
            display block
          .message
            position relative
            .dot
              display block
              position absolute
              top 2px
              right 0
              width 6px
              height 6px
              background $color-theme
              border-radius 50%
        .yesterday-income
          padding-top 37px
          .title
            width 100px
            font-size $font-size-medium
            color $color-text
            margin-left 50%
            transform translate(-42%, 0)
            .lnr-question-circle
              color $color-theme
              margin-left 2px
          .text
            text-align center
            font-size $font-size-large-xxx
            color $color-theme
            margin-top 12px
            margin-bottom 24px
        .data-item
          font-size 0
          width 100%
          .item
            display inline-block
            vertical-align middle
            width 33%
            padding 3px 0
            text-align center
            border-right 1px solid $color-border
            &:last-child
              border 0
            .title
              font-size $font-size-small
              color $color-text-l
            .text
              font-size $font-size-medium
              color $color-text
              padding-top 10px



      .remain
        padding 0 0 0 15px
        height 50px
        background $color-background-w
        display flex
        align-items center
        justify-content space-between
        .remain-amount
          font-size 15px
          color $color-text
        .operate-box
          flex 0 0 167px
          width 167px
          display flex
          .btn
            font-size 0
            color $color-link
            height 50px
            line-height 50px
            padding-right 20px
            &.mr
              margin-right 20px
            span
              display inline-block
              vertical-align middle
              font-size $font-size-medium
              &.lnr
                font-size $font-size-large
                margin-right 3px

      .list-link
        li
          display flex
          justify-content space-between
          align-items center
          padding 0 15px
          height 55px
          background $color-background-w
          border-bottom-1px($color-border)
          h4
            display flex
            align-items center
            span
              display block
              font-size 15px
              &.lnr
                font-size $font-size-large
                color $color-theme
                margin-right 10px
          .lnr-chevron-right
            color #ccc
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
