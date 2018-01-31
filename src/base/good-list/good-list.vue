<template>
  <div class="good-list" :class="typeClass">
    <ul>
      <li v-for="item in goods" :key="item.id">
        <div class="good-item" @click="toDetail(item)">
          <div class="image-header">
            <img class="good-image" :src="item.list_pic_url">
          </div>
          <div class="good-intro">
            <p class="name">
              {{item.name}}
            </p>
            <p class="desc" v-if="item.goods_brief">
              {{item.goods_brief}}
            </p>
            <div class="cell-text">
              <p class="price">￥{{item.retail_price}}</p>
              <!-- <div class="lnr lnr-cart"></div> -->
            </div>
          </div>
        </div>
      </li>
      <router-link v-if="moreTag" tag="li" to="/cart">
        <div class="more">  
          <p>更多{{moreTag}}好物</p>
          <span class="lnr lnr-arrow-right-circle"></span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        goods: {
          type: Array,
          default: []
        },
        mold: {
          type: String,
          default: ''
        },
        moreTag: {
          type: String,
          default: ''
        }
      },
      computed: {
        typeClass() {
          return {
            'large': this.mold === 'large',
            'grid': this.mold === 'grid',
            'cell': this.mold === 'cell'
          }
        }
      },
      methods: {
        toDetail(item) {
          let url = `/good/${item.id}`
          this.$router.push(url)
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .good-list
    position: relative
    &.large
      li
        margin-bottom 15px
        .good-item
          background $color-background-w
          .image-header
            display block
            position relative
            width 100%
            height 0
            padding-top 100%
            .good-image
              position absolute
              left 0
              top 0
              width 100%
              height 100%
          .good-intro
            padding 10px
            .name
              font-size $font-size-medium
              color $color-text
              line-height 1
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .desc
              font-size $font-size-small
              color $color-text-l
              margin-top 8px 
            .cell-text
              display flex
              justify-content space-between
              align-items center
              margin-top 6px
              .price
                font-size $font-size-medium-x
                color $color-text
                margin-top 5px
              .lnr
                font-size $font-size-large-x
                color $color-theme
    &.grid
      ul
        display flex
        justify-content space-between
        align-items center
        flex-wrap wrap
        li
          display block
          width 48%
          margin-bottom 15px
          .more
            height 100%
            display flex
            flex-direction column
            align-items center
            justify-content center
            background $white
            padding 40px 0
            p
              font-size $font-size-medium-x
            .lnr
              font-size $font-size-large-x
              color $color-text
              margin-top 20px
          .good-item
            background $color-background-w
            .image-header
              display block
              position relative
              width 100%
              height 0
              padding-top 100%
              .good-image
                position absolute
                left 0
                top 0
                width 100%
                height 100%
            .good-intro
              padding 10px
              .name
                font-size $font-size-small
                color $color-text
                line-height 1.6
                display -webkit-box
                overflow hidden
                text-overflow ellipsis
                -webkit-box-orient vertical
                -webkit-line-clamp 2
              .desc
                font-size $font-size-small
                color $color-text-l
                margin-top 8px 
              .cell-text
                display flex
                justify-content space-between
                align-items center
                .price
                  font-size $font-size-medium-x
                  color $color-text
                  margin-top 5px
                .lnr
                  font-size $font-size-large-x
                  color $color-theme


    &.cell
      li
        margin-bottom 15px
        .good-item
          position relative
          display flex
          background $color-background-w
          &:after
            content ''
            position absolute
            left 0
            top 0
            width 200%
            height 200%
            -webkit-transform scale(0.5)
            transform scale(0.5)
            -webkit-transform-origin 0 0
            transform-origin 0 0
            border 1px solid #e6e6e6
            box-sizing border-box
            background #fff
          .image-header
            position relative
            width 120px
            height 120px
            flex 0 0 120px
            z-index 1
            .good-image
              width 100%
              height 100%
          .good-intro
            position relative
            flex 1
            padding 10px
            z-index 1px
            display: flex
            flex-direction: column
            justify-content: space-between
            z-index 1
            .name
              font-size $font-size-small
              color $color-text
              line-height 1.6
              display -webkit-box
              overflow hidden
              text-overflow ellipsis
              -webkit-box-orient vertical
              -webkit-line-clamp 2
            .desc
              font-size $font-size-small
              color $color-text-l
              margin-top 8px 
            .cell-text
              display flex
              justify-content space-between
              align-items center
              margin-top 20px
              .price
                font-size $font-size-medium-x
                color $color-text
                margin-top 5px
              .lnr
                font-size $font-size-large-x
                color $color-theme

</style>
