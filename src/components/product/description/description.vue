<template>
  <transition name="slide">
    <scroll ref="scroll" class="description-wrapper">
      <div class="description-content">
        <split></split>
        <panel title="产品说明" :text="productDescription.productDesc"></panel>
        <split></split>
        <panel title="项目说明" text="资金需求方为浙江禅文投资管理有限公司，其品牌嘉银贷是一款基于地理位置定位的社交金融产品，旨在利用平台优势，为有需求的借款人与出借人做好撮合性服务而组成的一个资产包。借款人主要为，经营良好的，有稳定收入的中小企业主；在本地有商品房，有固定资产的个人；信用记录良好，有稳定收入来源的公务员，事业单位，上市公司，外企，当地百强企业的上班族。"></panel>
      </div>
    </scroll>
  </transition>
</template>
<script type="text/ecmascript-6">
  import Panel from 'base/panel/panel'
  import Split from 'components/split/split'
  import Scroll from 'base/scroll/scroll'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'productDescription'
      ])
    },
    methods: {
      _getDesc() {
        if (!this.productDescription.productId) {
          this.$router.push('/')
        }
      }
    },
    created() {
      this._getDesc()
    },
    components: {
      Panel,
      Split,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .description-wrapper
    position: absolute
    z-index: 100
    top: 44px
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
</style>
