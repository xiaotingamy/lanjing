<template>
  <!-- <transition name="slide"> -->
    <div class="good">
      <scroll ref="scroll" class="good-detail-wrapper" :data="gallery">
        <div class="good-detail-content">
          <div v-if="gallery.length" class="slider-wrapper">
            <div class="slider-content">
              <slider ref="slider">
                <div v-for="item in gallery" :key="item.remark">
                  <img :src="item.img_url" @load="loadImage">
                </div>
              </slider>
            </div>
          </div>
          <div class="base-info border-bottom-1px">
            <div class="top-box border-bottom-1px">
              <p class="name">{{info.name}}</p>
              <p class="price">￥{{info.retail_price}}</p>
              <!-- <p class="origin-price">233.00 - 523.00</p> -->
            </div>
            <div class="cell-text">
              <p>运费：免运费</p>
              <p>剩余：144</p>
              <p>销量：98</p>
            </div>
          </div>
          <div class="tags-wrapper border-bottom-1px" v-if="brand.name">
            <ul>
              <li>
                <span>{{brand.name}}</span>
              </li>
              <!-- <li>
                <span>双11</span>
              </li> -->
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
            <div class="attribute" v-if="attribute.length">
              <div class="item" v-for="item in attribute" :key="item.name">
                <div class="left">{{item.name}}</div>
                <div class="right"><div class="con">{{item.value}}</div></div>
              </div>
            </div>
            <div class="desc" v-if="info.goods_desc" v-html="info.goods_desc">
            </div>
          </div>
        </div>
      </scroll>
      <div class="good-detail-footer">
        <div class="footer-box border-top-1px">
          <div class="left">
            <router-link tag="div" to="/" class="item border-right">
              <p class="lnr lnr-home"></p>
              <p class="text">首页</p>
            </router-link>
            <router-link tag="div" to="/cart" class="item">
              <p class="lnr lnr-cart"></p>
              <p class="text">购物车</p>
            </router-link>
          </div>
          <div class="add-cart" @click="showSku">加入购物车</div>
          <div class="buy-btn" @click="showSku">立即购买</div>
        </div>
      </div>
      <sku ref="sku" :good-name="info.name"
            @addtocart="addCart"
            @gotobuy="goBuy"
            @changeSku="handleSku"></sku>
      <router-view></router-view>
    </div>
  <!-- </transition> -->
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Sku from 'components/sku/sku'
  import Split from 'components/split/split'
  import {getGoodDetail, getSkuInfo} from 'api/good'
  import {ERR_OK} from 'api/config'
  import {mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        gallery: [], // 图片
        info: {}, // 基本信息
        brand: {}, // 标签
        attribute: [] // 商品参数
      }
    },
    created() {
      this._getGoodDetail()
      this._getSkuInfo()
    },
    activated() {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    methods: {
      _getGoodDetail() {
        getGoodDetail(this.$route.params.id).then((res) => {
          if (res.errno === ERR_OK) {
            this.gallery = res.data.gallery
            this.info = res.data.info
            this.brand = res.data.brand
            this.attribute = res.data.attribute
          }
        })
      },
      _getSkuInfo() {
        getSkuInfo().then((res) => {
          if (res.errno === ERR_OK) {
            this.skuList = res.data.skuList
            this.setSkuList(this.skuList)
            this.setTotalStock(res.data.totalStock)
            this.setPrice(res.data.initial_price)
            // this.setGoodName(res.data.name)
            this.setMajorImage(res.data.initial_img_url)
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
      addCart(sku, num) {
        console.log(sku)
        console.log(num)
        if (!sku.id) {
          alert('请选择规格')
        } else {
          alert('添加了' + num + '个，skuId为' + sku.id + '的商品到购物车')
        }
      },
      goBuy(sku, num) {
        if (!sku.id) {
          alert('请选择规格')
          return false
        } else {
          alert('选择了' + num + '个，skuId为' + sku.id + '的商品去购买，现在去购买吗？')
        }
        let id = this.$route.params.id
        this.$router.push({ path: `/good/${id}/buy` })
      },
      handleSku(item, index) {
        this.selectSku({
          list: this.skuList,
          index
        })
      },
      ...mapMutations({
        setSkuList: 'SET_SKULIST',
        setMajorImage: 'SET_MAJORIMAGE',
        setTotalStock: 'SET_TOTALSTOCK',
        setPrice: 'SET_PRICE'
      }),
      ...mapActions([
        'selectSku'
      ])
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
          .attribute
            padding 0 15px 15px
            .item
              zoom: 1
              font-size: 12px
              line-height: 22px
              padding: 5px 15px 5px 0
              background-image: linear-gradient(to right,#e6e6e6 33%,rgba(255,255,255,0) 0)
              background-position: top
              background-size: 6px 1px
              background-repeat: repeat-x
              &:after
                display: block
                clear: both
                visibility: hidden
                height: 0
                overflow: hidden
                content: "."
              .left
                float left
                width: 73px
                position: relative
                color: #999
              .right
                margin-left 84px
          .desc
            width 100%
            img 
              width: 100%
              display: block
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
          background #F8E4A5
          color $color-text
          width: 100%
          height: 55px
          line-height: 55px
          text-align: center
          font-size $font-size-medium-x
        .buy-btn
          flex 1
          background #F8B530
          color #ffffff
          width: 100%
          height: 55px
          line-height: 55px
          text-align: center
          font-size $font-size-medium-x
</style>
