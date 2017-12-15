<template>
  <div class="homepage-wrapper">
    <scroll ref="scroll" class="homepage-content">
      <div>
        <div v-if="banners.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item, index) in banners" :key="index">
                <a :href="item.remark">
                  <img class="needsclick" :src="item.imageUrl" @load="loadImage">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <router-link tag="div" to="/search" class="searchbar-wrapper">
          <div class="searchbar-box-border">
            <div class="searchbar">
              <span class="lnr lnr-magnifier"></span>
              <span class="text">搜索</span>
            </div>
          </div>
        </router-link>
        <div class="large-product-list-wrapper">
          <product-list mold="large" :products="hotProducts"></product-list>
        </div>
        <div class="grid-product-list-wrapper">
          <product-list mold="grid" :products="hotProducts"></product-list>
        </div>
        <div class="cell-product-list-wrapper">
          <product-list mold="cell" :products="hotProducts"></product-list>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import ProductList from 'base/product-list/product-list'
  import {getBanners} from 'api/homepage'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        banners: [],
        hotProducts: []
      }
    },
    created() {
      this._getBanners()
    },
    activated() {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    methods: {
      _getBanners() {
        getBanners().then((res) => {
          if (res.code === ERR_OK) {
            this.banners = res.data
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
      }
    },
    components: {
      Scroll,
      Slider,
      Loading,
      ProductList
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
    .homepage-content
      height 100%
      overflow hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 150px
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .large-product-list-wrapper
        padding 15px 15px 0
        overflow hidden
      .grid-product-list-wrapper
        padding 0 15px
      .cell-product-list-wrapper
        padding 0 15px
      .searchbar-wrapper
        background $color-background
        padding 8px 10px
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
            border-radius: 10px
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
            .lnr
              position: absolute;
              left: 10px
              top: 3px
              line-height: 28px
              font-size $font-size-medium-x
              color $color-text-l
            .text
              display block
              font-size $font-size-medium
              color $color-text-l
              width 100%
              padding 10px 0
</style>
