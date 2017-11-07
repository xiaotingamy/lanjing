<template>
  <transition name="slide">
    <div class="product" v-if="product.id">
      <m-header :title="product.name"></m-header>
      <scroll ref="scroll" class="product-detail-wrapper">
        <div class="product-detail-content">
          <div class="head border-bottom-1px">
            <div class="income-data">
              <span class="data">{{product.yearIncome}}</span>
              <span class="util">%</span>
              <span class="increase-income" v-if="product.increaseInterest">+{{product.increaseInterest}}%</span>
            </div>
            <div class="income-title">预期年化收益率</div>
            <div class="activity-mark" v-if="product.bonus != null && product.bonus.id > 0 && product.bonus.description != ''">
              <span>{{product.bonus.description}}</span>
            </div>
            <div class="limit-box">
              <div class="period">
                <p>{{product.financePeriod}}天</p>
                <p>投资期限</p>
              </div>
              <div class="middle-line"></div>
              <div class="lowest-amount">
                <p>{{product.lowestAmount}}元</p>
                <p>起投金额</p>
              </div>
            </div>
          </div>
          <div class="secondary border-bottom-1px">
            <div class="progress-box">
              <progress-bar-inner :percent="calculatePercent(product.actualAmount, product.totalAmount)"></progress-bar-inner>
            </div>
            <div class="amount-box">
              <p>募集金额：{{product.totalAmount}}元</p>
              <p>剩余金额：<span class="red">{{product.totalAmount - product.actualAmount}}</span>元</p>
            </div>
            <div class="remark" v-if="product.category.property === 'NOVICE'">
              购买说明：仅限新用户，限购一次，最高金额{{product.highestAmount}}元
            </div>
            <div class="remark">
              还款方式：到期次日本息一次性返还至您的账户余额
            </div>
          </div>
          <split v-if="product.bonus != null && product.bonus.id > 0"></split>
          <div class="activity-wrapper border-bottom-1px" v-if="product.bonus != null && product.bonus.id > 0">
            <ul class="content">
              <li v-if="product.bonus.firstOrder != null && product.bonus.firstOrder != ''">
                <div class="icon icon-first"></div>
                <p class="text">首单可随机获得{{product.bonus.firstOrder}}个嘉银币</p>
              </li>
              <li v-if="product.bonus.lastOrder > 0">
                <div class="icon icon-last"></div>
                <p class="text">尾单可随机获得投资金额*{{product.bonus.lastOrder}}%的嘉银币</p>
              </li>
              <li v-if="product.bonus.bonusType > 0">
                <div class="icon icon-back" v-show="hasBackIcon"></div>
                <div class="text">
                  <p>{{backDesc(product.bonus)}}</p>
                </div>
              </li>
            </ul>
          </div>
          <split></split>
          <div class="time-line border-bottom-1px">
            <div class="block">
              <div class="icon-start"></div>
              <p class="title">起息时间</p>
              <p class="time">2017-09-12</p>
            </div>
            <div class="line-to"></div>
            <div class="block">
              <div class="icon-stay"></div>
              <p class="title">到期时间</p>
              <p class="time">2018-03-11</p>
            </div>
            <div class="line-to"></div>
            <div class="block">
              <div class="icon-end"></div>
              <p class="title">到账时间</p>
              <p class="time">2018-03-11</p>
            </div>
          </div>
          <split></split>
          <ul class="list-link">
            <li class="border-bottom-1px" @click="toDescription(product.description)">
              <h4>产品详情</h4>
              <span class="lnr lnr-chevron-right"></span>
            </li>
            <li class="border-bottom-1px" v-if="product.description.obligatoryRight != '' || (product.productContract != null && product.productContract.productAttachments.length > 0)" @click="toObligatoryRight(obligatoryRight)">
              <h4>债权信息</h4>
              <span class="lnr lnr-chevron-right"></span>
            </li>
            <li class="border-bottom-1px" @click="toSecurity()">
              <h4>安全保障</h4>
              <span class="lnr lnr-chevron-right"></span>
            </li>
            <li class="border-bottom-1px" @click="toTradeDetail()">
              <h4>投资记录</h4>
              <!--<div class="text-info">23人</div>-->
              <span class="lnr lnr-chevron-right"></span>
            </li>
          </ul>
        </div>
      </scroll>
      <div class="product-detail-footer">
        <div class="footer-box border-top-1px">
          <div class="icon-calculate" @click="showCalculator"></div>
          <div class="buy" :class="{'active': buyActive}">{{buyDesc}}</div>
        </div>
      </div>
      <calculator ref="calculator" :period="product.financePeriod" :yearIncome="income"></calculator>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  import Calculator from 'components/calculator/calculator'
  import ProgressBarInner from 'components/product/progress-bar-inner/progress-bar-inner'
  import Split from 'components/split/split'
  import {getProductDetail} from 'api/product'
  import {ERR_OK} from 'api/config'
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        product: {},
//        purchaseQuantity: 0,
//        right: 0,
        hasBackIcon: true
      }
    },
    created() {
      this._getProductDetail()
    },
    computed: {
      buyActive() {
        // 还少一个条件判断  或者还未开售的情况
        return this.product.actualAmount < this.product.totalAmount
      },
      buyDesc() {
//        还需考虑倒计时情况
        return this.product.actualAmount >= this.product.totalAmount ? '已售罄' : '立即购买'
      },
      obligatoryRight() {
        return Object.assign({}, this.product.description, this.product.productContract)
      },
      income() {
        return this.product.yearIncome + this.product.increaseInterest
      }
    },
    methods: {
      _getProductDetail() {
        getProductDetail(this.$route.params.id).then((res) => {
          if (res.code === ERR_OK) {
            this.product = res.data
//            this.product = res.data.product
//            this.purchaseQuantity = res.data.purchaseQuantity
//            this.right = res.data.right
//            console.log(this.product)
          }
        })
      },
      calculatePercent(actual, total) {
        var percent = ((actual / total) * 100).toFixed(2)
        if (percent > 0 && percent < 1) {
          percent = 1
        } else {
          percent = Math.floor(percent)
        }
        return percent
      },
      backDesc(bonus) {
        var desc = ''
        var strategy = bonus.strategies
        if (!strategy) {
          this.hasBackIcon = false
          return
        }
        if (bonus.bonusType === 1) {
          strategy.forEach((el) => {
            var givenType = bonus.givenType
            if (givenType === 1) {
              desc = `单笔投资满${el.amount}返${el.givenAmount}个嘉银币`
            }
            if (givenType === 2) {
              desc = `单笔投资满${el.amount}返${el.givenAmount}元红包`
            }
            if (givenType === 3) {
              desc = `单笔投资满${el.amount}返${el.givenAmount / 100}加息券`
            }
          })
        } else if (bonus.bonusType === 2) {
          this.hasBackIcon = true
          desc = `返${bonus.amount}元红包`
        }
        return desc
      },
      toDescription(desc) {
        this.$router.push({
          path: `${this.product.id}/description`
        })
        this.setProductDescription(desc)
      },
      toObligatoryRight(right) {
        this.$router.push({
          path: `${this.product.id}/obligatoryRight`
        })
        this.setProductDescription(right)
      },
      toSecurity() {
        this.$router.push({
          path: `${this.product.id}/security`
        })
      },
      toTradeDetail() {
        this.$router.push({
          path: `${this.product.id}/trade/detail`
        })
      },
      showCalculator() {
        this.$refs.calculator.show()
      },
      ...mapMutations({
        setProductDescription: 'SET_PRODUCT_DESCRIPTION'
      })
    },
    components: {
      MHeader,
      ProgressBarInner,
      Split,
      Scroll,
      Calculator
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .product
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
    .product-detail-wrapper
      position absolute
      top 44px
      bottom 55px
      width 100%
      overflow hidden
      .product-detail-content
        padding-bottom 10px
        .head
          padding: 15px
          border-bottom-1px($color-border)
          background-color $color-background-w
          .income-data
            text-align center
            font-size 0
            color $color-theme
            line-height 1
            .data
              font-size 48px
            .util
              font-size $font-size-small-s
            .increase-income
              font-size $font-size-small-s
              color $color-increase
          .income-title
            margin-top 12px
            margin-bottom 10px
            text-align center
            color $color-text-l
            font-size $font-size-small
          .activity-mark
            text-align center
            height 22px
            span
              color $color-theme
              border-radius 4px
              padding 1px 5px
              font-size $font-size-small-s
              border 1px solid $color-theme
          .limit-box
            display flex
            align-items center
            margin-top 20px
            font-size $font-size-small
            color $color-text-l
            .middle-line
              height 30px
              width 0px
              border-left: 1px solid $color-border
            .period
              width 49%
              text-align center
              p
                &:first-child
                  color $color-text-n
                  font-size $font-size-large
                  margin-bottom: 6px
            .lowest-amount
              width 49%
              text-align center
              p
                &:first-child
                  color $color-text-n
                  font-size $font-size-large
                  margin-bottom 6px
        .secondary
          padding-bottom 8px
          border-bottom-1px($color-border)
          background-color $color-background-w
          .progress-box
            margin-bottom: 12px
          .amount-box
            display flex
            justify-content space-between
            padding 0 22px
            margin-bottom 8px
            font-size $font-size-small
            color $color-text-l
            .red
              color $color-theme
          .remark
            padding 0 22px
            font-size $font-size-small
            color $color-text-l
            margin-bottom 8px
        .activity-wrapper
          padding 10px 24px
          background: $color-background-w
          border-bottom-1px($color-border)
          .content
            li
              display flex
              margin-bottom 6px
              &:last-child
                margin-bottom 0
              .icon
                width 18px
                height 18px
                margin-right 8px
                &.icon-first
                  bg-image('first')
                  background-size 18px
                &.icon-last
                  bg-image('last')
                  background-size 18px
                &.icon-back
                  bg-image('back')
                  background-size 18px
              .text
                flex: 1
                font-size $font-size-small
                color $color-text-n
                line-height 18px
        .time-line
          display flex
          justify-content space-between
          align-items center
          flex 0 0 auto
          padding 0 40px
          height 75px
          border-bottom-1px($color-border)
          background $color-background-w
          .block
            display flex
            flex-flow column nowrap
            align-items center
            .icon-start
              width 18px
              height 18px
              bg-image('icon-start')
              background-size 18px
              margin-bottom 5px
            .icon-stay
              width 18px
              height 18px
              bg-image('icon-stay')
              background-size 18px
              margin-bottom 5px
            .icon-end
              width 18px
              height 18px
              bg-image('icon-end')
              background-size 18px
              margin-bottom 5px
            .title
              font-size $font-size-small
              color $color-text-n
              margin-bottom 5px
            .time
              font-size $font-size-small-s
              color $color-text-l
          .line-to
            height 1px
            border-radius 50%
            width 45px
            background $color-border
        .list-link
          li
            display flex
            justify-content space-between
            align-items center
            padding 0 15px
            height 50px
            background $color-background-w
            border-bottom-1px($color-border)
            h4
              font-size 15px
              color $color-text
            .lnr-chevron-right
              color #ccc
            .text-info
              flex 1 1 auto
              text-align right
              font-size 14px
              color $color-text-l
              margin-right 10px
    .product-detail-footer
      position absolute
      bottom 0
      left 0
      width 100%
      height 55px
      background $color-background-w
      .footer-box
        display flex
        justify-content space-between
        align-items center
        padding 0 15px
        height 100%
        border-top-1px($color-border)
        .icon-calculate
          flex 0 0 30px
          margin-right 15px
          width 30px
          height 30px
          bg-image('calculate')
          background-size 30px
        .buy
          flex 1
          height 40px
          text-align center
          font-size 15px
          line-height 40px
          border-radius 4px
          color $color-background-w
          background #ddd
          &.active
            color $color-background-w
            background $color-theme
</style>
