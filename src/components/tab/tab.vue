<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/index/recommend">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/index/cate">
      <span class="tab-link">美食</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/index/seafood">
      <span class="tab-link">海鲜</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/index/article">
      <span class="tab-link">看点好的</span>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
    .tab
      display: flex
      height: 30px
      line-height: 30px
      font-size: $font-size-medium
      background #fafafa
      flex-flow: row nowrap
      padding 0 15px
      position: relative
      width: 100%
      overflow: hidden
      box-sizing border-box
      .tab-item
        flex-shrink: 0
        margin-right 30px
        height 100%
        .tab-link
          display block
          color: $color-text
          position relative
          line-height: 30px
          height 100%
        &.router-link-active
          .tab-link
            &:after
              content: ' '
              position: absolute
              left: 0
              bottom: 0
              width: 100%
              height: 2px
              background-color: $color-theme
</style>