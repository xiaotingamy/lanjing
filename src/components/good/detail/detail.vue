<template>
  <transition name="slide">
    <div class="good">
      <scroll ref="scroll" class="good-detail-wrapper">
        <div class="good-detail-content">
          <div v-if="goodImages.length" class="slider-wrapper">
            <div class="slider-content">
              <slider ref="slider">
                <div v-for="item in goodImages" :key="item.remark">
                  <a :href="item.remark">
                    <img class="needsclick" :src="item.imageUrl" @load="loadImage">
                  </a>
                </div>
              </slider>
            </div>
          </div>
          <div class="base-info border-bottom-1px">
            <div class="top-box border-bottom-1px">
              <p class="name">良品铺子零食大礼包组合一整箱好吃的混合装吃货膨化食品小吃批发</p>
              <p class="price">￥123.00 - 152.22</p>
              <p class="origin-price">233.00 - 523.00</p>
            </div>
            <div class="cell-text">
              <p>运费：免运费</p>
              <p>剩余：144</p>
              <p>销量：98</p>
            </div>
          </div>
          <div class="tags-wrapper border-bottom-1px">
            <ul>
              <li>
                <span>预售</span>
              </li>
              <li>
                <span>双11</span>
              </li>
            </ul>
          </div>
          <split></split>
          <div class="cell-link border-bottom-1px" @click="showSku">
            <div class="text">选择规格</div>
            <div class="arrow"><span class="lnr lnr-chevron-right"></span></div>
          </div>
          <split></split>
          <div class="content">
            <div class="header">
              商品详情
            </div>
            <div class="desc">
              我是正文描述...
            </div>
          </div>
        </div>
      </scroll>
      <div class="good-detail-footer">
        <div class="footer-box border-top-1px">
          <div class="left">
            <div class="item border-right">
              <p class="lnr lnr-home"></p>
              <p class="text">首页</p>
            </div>
            <div class="item border-right">
              <p class="lnr lnr-phone-handset"></p>
              <p class="text">客服</p>
            </div>
            <div class="item">
              <p class="lnr lnr-cart"></p>
              <p class="text">购物车</p>
            </div>
          </div>
          <div class="add-cart" @click="showSku">加入购物车</div>
          <div class="buy-btn" @click="tiao">立即购买</div>
        </div>
      </div>
      <sku ref="sku"></sku>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Sku from 'components/sku/sku'
  import Split from 'components/split/split'
//  import {getGoodDetail} from 'api/good'
  import {ERR_OK} from 'api/config'
  import {getBanners} from 'api/homepage'
  export default {
    data() {
      return {
        good: {},
        goodImages: []
      }
    },
    created() {
//      this._getGoodDetail()
      this._getBanners()
      console.log(this.$route.params.id)
    },
    activated() {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    computed: {
    },
    methods: {
//      _getGoodDetail() {
//        getGoodDetail(this.$route.params.id).then((res) => {
//          if (res.code === ERR_OK) {
//            this.good = res.data
//          }
//        })
//      }
      _getBanners() {
        getBanners().then((res) => {
          if (res.code === ERR_OK) {
            this.goodImages = res.data
          }
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      },
      showSku() {
        this.$refs.sku.show()
      },
      tiao() {
        let id = this.$route.params.id
        this.$router.push({ path: `/good/${id}/buy` })
      }
    },
    components: {
      Split,
      Scroll,
      Slider,
      Sku
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .good
    position: fixed
    z-index: 1
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
    .good-detail-wrapper
      position absolute
      top 0
      bottom 55px
      width 100%
      overflow hidden
      .good-detail-content
        padding-bottom 10px
        .slider-wrapper
          position: relative
          width: 100%
          height: 0
          padding-top: 100%
          background #fff
          .slider-content
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
        .base-info
          background: #fff
          position: relative
          border-bottom-1px($color-border)
          .top-box
            position: relative
            margin-left: 15px
            padding: 10px 15px 10px 0
            border-bottom-1px($color-border)
            .name
              font-size: 16px
              color: #000
              line-height: 1.6
              display: -webkit-box
              display: box
              overflow: hidden
              text-overflow: ellipsis
              -webkit-box-orient: vertical
              box-orient: vertical
              -webkit-line-clamp: 2
              line-clamp: 2
            .price
              font-size: 18px
              color: #f8484a
              margin-top: 10px
              font-weight: bold
            .origin-price
              font-size: 12px
              color: #c9c9c9
              text-decoration: line-through
              margin-top: 5px
          .cell-text
            height: 39px
            padding-left: 15px
            padding-right: 15px
            display: flex
            align-items: center
            justify-content: space-between
            color: #999
            font-size: 14px
            box-sizing: border-box
        .tags-wrapper
          position: relative
          width: 100%
          padding: 15px 15px 0
          box-sizing: border-box
          background: #fff
          border-bottom-1px($color-border)
          ul
            list-style: none
            font-size: 0
            li
              display: inline-block
              margin-bottom: 15px
              margin-right: 10px
              span
                height: 32px
                line-height: 30px
                font-size: 12px
                color: $color-theme
                padding: 0 5px
                border: 1px solid $color-theme
                border-radius: 3px
        .cell-link
          padding: 15px
          position: relative
          display: flex
          align-items: center
          justify-content space-between
          background #fff
          border-bottom-1px($color-border)
          .text
            font-size 14px
            color: #313131
            line-height 1
          .arrow
            .lnr
              font-size 14px
              color #666
        .content
          background $color-background-w
          .header
            font-size $font-size-medium
            padding 15px
            color #313131
          .desc
            font-size $font-size-small
            padding-bottom 15px
            
    .good-detail-footer
      position absolute
      bottom 0
      left 0
      width 100%
      height 55px
      background $color-background-w
      .footer-box
        display flex
        height 100%
        .left
          flex 1
          display flex
          align-items center
          font-size $font-size-small
          height 55px
          .item
            display flex
            align-items center
            justify-content center
            flex-direction column
            position: relative
            flex: 1
            color: #999
            text-align: center
            height 100%
            &.border-right
              border-right 1px solid $color-border
            .lnr
              font-size $font-size-large
            .text
              line-height 1
              padding-top 5px  
        .add-cart
          flex 1
          background #f85
          color #ffffff
          width: 100%
          height: 55px
          line-height: 55px
          text-align: center
          font-size $font-size-medium-x
        .buy-btn
          flex 1
          background #ff4444
          color #ffffff
          width: 100%
          height: 55px
          line-height: 55px
          text-align: center
          font-size $font-size-medium-x
</style>
