<template>
  <div class="cartcontrol">
    <p class="btn-minus" @click="decreaseCount" :class="{'off': innerCount <= 1}">
      <span class="btn minus"></span>
    </p>
    <p class="btn-input">
      <input type="tel" v-model="innerCount" @blur="blurInput">
    </p>
    <p class="btn-plus" @click="increaseCount" :class="{'off': innerCount === innerStock}">
      <span class="btn plus"></span>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      good: {
        type: Object,
        default: function() {
          return {
            stock: 1000,
            count: 1
          }
        }
      },
      indexNum: {
        type: Number,
        require: true
      }
    },
    data() {
      return {
        innerCount: 1,
        innerStock: 1000
      }
    },
    created() {
      this.innerStock = this.good.stock
      this.innerCount = this.good.count
      if (this.innerCount > this.innerStock) {
        this.innerCount = this.innerStock
      }
    },
    methods: {
      decreaseCount() {
        let newValue = this.innerCount
        if (newValue > 1) {
          this.innerCount = newValue - 1
        }
        this.$emit('change', this.innerCount, this.indexNum)
      },
      increaseCount() {
        let newValue = this.innerCount
        if (newValue <= this.innerStock - 1) {
          this.innerCount = Number(newValue) + 1
        }
        this.$emit('change', this.innerCount, this.indexNum)
      },
      blurInput() {
        if (this.innerCount === '') {
          this.innerCount = 1
        }
        this.$emit('change', this.innerCount, this.indexNum)
      }
    },
    watch: {
      innerCount(newCount) {
//        this.answer = 'Waiting for you to stop typing...'
//        this.getAnswer()
        if (newCount > this.innerStock) {
          this.innerCount = this.innerStock
        }
        if (isNaN(newCount)) {
          this.innerCount = 1
        }
        this.$emit('change', this.innerCount, this.indexNum)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .cartcontrol
    display flex
    align-items center
    .btn
      display block
      height 30px
      position relative
      &:after, &:before
        position absolute
        top 14.25px
        left 10.88px
        border-bottom 2px solid #878787
        width 12px
        height 0
        content ' '
      &.plus
        &:before
          transform rotate(90deg)
    .btn-minus
      background #f1f1f1
      width 33px
      &.off
        background #f9f9f9
        .btn
          &:after, &:before
            border-color #ddd
    .btn-input
      background #f1f1f1
      width 39px
      border-left 3px solid #fff
      border-right 3px solid #fff
      input
        height 30px
        width 100%
        text-align center
        font-size 14px
        background transparent
    .btn-plus
      width 33px
      background #f1f1f1
      &.off
        background #f9f9f9
        .btn
          &:after, &:before
            border-color #ddd

</style>
