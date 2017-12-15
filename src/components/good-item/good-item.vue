<template>
  <div class="good-item">
    <div class="img">
      <img :src="good.imgUrl"/>
    </div>
    <div class="text-box">
      <div class="name-box">
        <p class="name">{{good.name}}</p>
        <p class="price">￥{{good.price}}</p>
      </div>
      <div class="sku-box">
        <p class="sku">{{good.selectedSku}}</p>
        <p class="quantity">X{{good.quantity}}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      good: {
        type: Object,
        default: function() {
          return {
            name: 'kk',
            imgUrl: 'http://img.alicdn.com/bao/uploaded/i2/725677994/TB1Gk0xehHI8KJjy1zbXXaxdpXa_!!0-item_pic.jpg_220x10000Q75s50.jpg_.webp',
            price: '23.00',
            selectedSku: '黑色',
            quantity: '5'
          }
        }
      }
    }
  }
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .good-item
    background: #fafafa
    padding: 6px 15px
    display: flex
    align-items: start
    .img
      display: block
      width: 90px
      height: 90px
      flex: 0 0 90px
      margin-right: 10px
      img 
        display: block
        width: 100%
        height: 100%
    .text-box
      flex 1
      .name-box
        display: flex
        align-items: flex-start
        justify-content: space-between
        font-size: 14px
        color: #333
        line-height: 1.6
        .name
          display: -webkit-box
          overflow: hidden
          text-overflow: ellipsis
          -webkit-box-orient: vertical
          -webkit-line-clamp: 2
          margin-right: 15px
      .sku-box
        display: flex
        align-items: flex-start
        justify-content: space-between
        font-size: 12px
        color: #999
        margin-top: 10px
        .quantity
          text-align: right
          flex: 1
</style>
