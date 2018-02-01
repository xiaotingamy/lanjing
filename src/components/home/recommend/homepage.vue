<template>
  <div class="homepage-wrapper">
    <scroll ref="scroll" class="homepage-content" :data="banner">
      <div>
        <div v-if="banner.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="item in banner" :key="item.id">
                <a :href="item.link">
                  <img class="needsclick" :src="item.image_url" @load="loadImage">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <router-link tag="div" to="/search" class="searchbar-wrapper">
          <div class="searchbar-box-border">
            <div class="searchbar">
              <span class="lnr lnr-magnifier"></span>
              <span class="text">搜索商品, 共9930款好物</span>
            </div>
          </div>
        </router-link>
        <div class="ad-container">
          <div class="left">
            <a href="">
              <img src="./2-pic1.png" alt="">
            </a>
          </div>
          <div class="right">
            <div class="ad">
              <a href="">
                <img src="./2-pic2.png" alt="">
              </a>
            </div>
            <div class="ad">
              <a href="">
                <img src="./2-pic3.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="recommend-floor">
          <div class="title">
            <h3>为你推荐</h3>
          </div>
          <div class="bd">
            <good-list mold="large" :goods="hotGoods"></good-list>
          </div>
        </div>
        <div class="newgood-floor">
          <div class="title">
            <router-link tag="h3" to="/">周一周四 · 新品首发</router-link>
            <span class="lnr lnr-chevron-right-circle"></span>
          </div>
          <div class="bd">
            <good-list mold="grid" :goods="newGoods"></good-list>
          </div>
        </div>
        <div class="good-grid" v-for="item in floorGoods" :key="item.id">
          <div class="floor-name">
            {{item.name}}
          </div>
          <div class="floor-b">
            <good-list mold="grid" :moreTag="item.name" :goods="item.goodsList"></good-list>
          </div>
        </div>
      </div>
    </scroll>
    <router-view :key="key"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import GoodList from 'base/good-list/good-list'
  import {getIndexData} from 'api/homepage'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        banner: [],
        hotGoods: [],
        newGoods: [],
        floorGoods: [],
        moreTag: ''
      }
    },
    created() {
      this._getIndexData()
    },
    activated() {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    methods: {
      _getIndexData() {
        getIndexData().then((res) => {
          if (res.errno === ERR_OK) {
            this.banner = res.data.banner
            this.hotGoods = res.data.hotGoodsList.slice(2)
            this.newGoods = res.data.newGoodsList
            this.floorGoods = res.data.categoryList
          }
          // console.log(res.data)
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      }
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
      }
    },
    components: {
      Scroll,
      Slider,
      Loading,
      GoodList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .homepage-wrapper
    position absolute
    top 74px
    bottom 49px
    width 100%
    // background $white
    .homepage-content
      height 100%
      overflow hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 170px
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .ad-container
        padding 15px
        display flex
        justify-content space-between
        .left
          width 168px
          height 168px
          flex 0 0 168px
          margin-right 10px
          img 
            width 100%
            height 100%
        .right
          flex 1
          display flex
          flex-direction column
          justify-content space-between
          .ad
            height 79px
            img 
              width 100%
              height 100%
          
      .recommend-floor
        padding 5px 15px 0
        .title
          font-size $font-size-medium-x
          padding-bottom 20px
          text-align center
      .newgood-floor
        padding 5px 15px 0
        .title
          display flex
          justify-content center
          align-items center
          padding-bottom 20px
          h3
            font-size $font-size-medium-x
            text-align center
            margin-right 3px
          .lnr
            font-size $font-size-medium-x
            color $color-text-l
      .good-grid
        padding 5px 15px 0
        .floor-name
          font-size $font-size-medium-x
          text-align center
          padding-bottom 20px
      .searchbar-wrapper
        background $color-background
        padding 15px 10px 8px
        display: flex
        box-sizing: border-box
        .searchbar-box-border
          position relative
          flex 1
          &:after
            content: ""
            position: absolute
            left: 0
            top: 0
            width: 200%
            height: 200%
            -webkit-transform: scale(.5)
            transform: scale(.5)
            -webkit-transform-origin: 0 0
            transform-origin: 0 0
            border-radius: 50px
            border: 1px solid #e6e6ea
            box-sizing: border-box
            background: #fff
          .searchbar
            position: relative
            padding-left: 30px
            padding-right: 30px
            height: 100%
            width: 100%
            box-sizing: border-box
            z-index: 1
            display flex
            align-items center 
            justify-content center
            .lnr
              display block
              line-height: 28px
              font-size $font-size-medium-x
              color $color-text-l
            .text
              display block
              font-size $font-size-medium
              color $color-text-l
              margin-left 10px
              padding 10px 0
</style>
