<template>
  <div>
    <m-header>
      <!-- <div slot="operate">
        <router-link class="search" to="/search" tag="div">
          <span class="lnr lnr-magnifier"></span>
        </router-link>
      </div> -->
    </m-header>
    <div class="tab-wrapper">
      <tab></tab>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'
  import MHeader from 'components/m-header/m-header'
  export default {
    components: {
      Tab,
      MHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .search
    font-size $font-size-large
    color #999
  .tab-wrapper
    position absolute
    top 44px
    left 0
    width 100%
</style>