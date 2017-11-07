<template>
  <transition name="slide">
    <div class="search-wrapper">
      <!--<div class="search-box-wrapper">-->
        <!--<search-box ref="searchBox" @query="onQueryChange"></search-box>-->
      <!--</div>-->
      <!--<div class="search-result" v-show="query" ref="searchResult">-->
        <!--<suggest @listScroll="blurInput" @select="saveSearch" ref="suggest" :query="query"></suggest>-->
      <!--</div>-->
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .search-wrapper
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
</style>
