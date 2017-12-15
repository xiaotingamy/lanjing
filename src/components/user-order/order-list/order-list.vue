<template>
  <scroll ref="order" 
  :data="orderList" 
  class="order-list-wrapper">
    <ul class="order-list">
      <li class="order-item" v-for="(item, index) in orderList" :key="item.id"></li>
      <loading v-show="hasMore" title=""></loading>
    </ul>
    <div v-show="!hasMore && !orderList.length" class="no-result-wrapper">
      <no-result title="暂无订单"></no-result>
    </div>
  </scroll>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import NoResult from 'base/no-result/no-result'
  const ALL = 'all'
  export default {
    props: {
      orderState: {
        type: String,
        default: ALL
      }
    },
    data() {
      return {
        page: 1,
        pullup: true,
        hasMore: true,
        orderList: []
      }
    },
    created() {
      this._getOrderList()
      console.log(this.orderState)
    },
    methods: {
      refresh() {
        this.$refs.list.refresh()
      },
      _getOrderList() {
        // let sign = this.$route.params.state
        // let data = {
        //   page: this.page,
        //   state: this.orderState// 传递（全部、待付款 等）类型的参数
        // }
        // getOrderList(data).then((res) => {
        //   if (res.code === ERR_OK) {
        //     this.orderList = res.data.orders
        //     this._checkMore(res.data)
        //   }
        // })
      },
      loadMore() {
        // if (!this.hasMore) {
        //   return
        // }
        // this.page++
        // getTradeDetail(this.tag, {
        //   page: this.page,
        //   state: this.orderState
        // }).then((res) => {
        //   if (res.code === ERR_OK) {
        //     this.tradeList = this.tradeList.concat(res.data.productTradeDetails)
        //     this._checkMore(res.data)
        //   }
        // })
      },
      _checkMore(data) {
        // const list = data.productTradeDetails
//        if (!list.length || (data.curnum + (data.curpage - 1) * perpage) >= data.totalnum) {
//          this.hasMore = false
//        }
      }
    },
    components: {
      Scroll,
      Loading,
      NoResult
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
</style>