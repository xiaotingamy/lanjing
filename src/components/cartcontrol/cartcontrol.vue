<template>
  <div class="cartcontrol">
    <p class="btn-minus" @click="decreaseNum" :class="{'off': inputNum <= 1}">
      <span class="btn minus"></span>
    </p>
    <p class="btn-input">
      <input type="tel" v-model="inputNum" @blur="blurInput" maxlength="6">
    </p>
    <p class="btn-plus" @click="increaseNum" :class="{'off': inputNum === maxNum}">
      <span class="btn plus"></span>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      indexNum: {
        type: Number,
        default: -1
      },
      stock: {
        type: Number,
        default: 10000
      },
      defaultNum: {
        type: [Number, String],
        default: 1
      }
    },
    data() {
      return {
        inputNum: 1,
        maxNum: 1000
      }
    },
    mounted() {
      setTimeout(() => {
        this.inputNum = this.defaultNum
        this.maxNum = this.stock
        if (this.inputNum > this.maxNum) {
          this.inputNum = this.maxNum
        }
      }, 20)
    },
    methods: {
      decreaseNum() {
        let newValue = this.inputNum
        if (newValue > 1) {
          this.inputNum = newValue - 1
        }
        this.$emit('change', this.inputNum, this.indexNum)
      },
      increaseNum() {
        let newValue = this.inputNum
        if (newValue <= this.maxNum - 1) {
          this.inputNum = Number(newValue) + 1
        }
        this.$emit('change', this.inputNum, this.indexNum)
      },
      blurInput() {
        if (this.inputNum === '') {
          this.inputNum = 1
        }
        this.$emit('change', parseInt(this.inputNum), this.indexNum)
      }
    },
    watch: {
      inputNum(newNum) {
        if (newNum > this.maxNum) {
          this.inputNum = this.maxNum
        }
        if (isNaN(newNum)) {
          this.inputNum = 1
        }
        this.$emit('change', parseInt(this.inputNum), this.indexNum)
      },
      stock(newValue) {
        this.maxNum = newValue
        if (this.inputNum - newValue > 0) {
          this.inputNum = newValue
        }
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
