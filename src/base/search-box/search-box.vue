<template>
  <div class="search-box">
    <span class="lnr lnr-magnifier"></span>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
    <span @click="clear" v-show="query" class="lnr lnr-cross-circle"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  import {debounce} from 'common/js/util'
  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索商品'
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      clear() {
        this.query = ''
      },
//      setQuery(query) {
//        this.query = query
//      },
      blur() {
        this.$refs.query.blur()
      }
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .search-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    padding 0 6px
    height 32px
    background $color-background-w
    border-radius 6px
    .lnr-magnifier
      font-size $font-size-medium
      color $color-text-l
      margin-right 5px
    .box
      flex 1
      marign 0 5px
      line-height 18px
      background $color-background-w
      color $color-text
      font-size $font-size-medium
      outline 0
      &::placeholder
        color $color-text-l
    .lnr-cross-circle
      font-size $font-size-medium-x
      color $color-text-l
</style>
