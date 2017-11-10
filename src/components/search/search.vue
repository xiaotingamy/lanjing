<template>
  <transition name="slide">
    <div class="search">
      <div class="search-box-wrapper">
        <div class="search-bar">
          <search-box ref="searchBox" @query="onQueryChange"></search-box>
        </div>
        <span class="cancel" @click="cancelSearch">取消</span>
      </div>
      <div class="search-result" v-show="query" ref="searchResult">
        <!--搜索结果-->
        <!--<suggest @listScroll="blurInput" @select="saveSearch" ref="suggest" :query="query"></suggest>-->
        <suggest></suggest>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import SearchBox from 'base/search-box/search-box'
  import Suggest from 'components/suggest/suggest'
  export default {
    data() {
      return {
        query: ''
      }
    },
    methods: {
      onQueryChange(query) {
        this.query = query.trim()
      },
      blurInput() {
        this.$refs.searchBox.blur()
      },
      cancelSearch() {
        this.$router.push('/')
        this.$refs.searchBox.clear()
      }
    },
    components: {
      SearchBox,
      Suggest
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .search
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background-w
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
    .search-box-wrapper
      display flex
      align-items center
      background $color-background
      padding 8px 15px
      .cancel
        /*width 50px*/
        /*flex 0 0 50px*/
        font-size $font-size-medium
        color $color-text-l
      .search-bar
        flex 1
        margin-right 10px
    .search-result
      position: fixed
      width: 100%
      top: 58px
      bottom: 0

</style>
