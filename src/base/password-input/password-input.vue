<template>
  <div class="item-input">
    <input ref="input"
           type="password"
           :value="value"
           @input="updateValue($event.target.value)"
           :placeholder="placeholder"
           :maxlength="maxlength">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      updateValue(value) {
        var result = value.replace(/[^a-zA-Z0-9]/g, '')
        this.$refs.input.value = result
        this.$emit('input', result)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item-input
    height 100%
    input
      outline 0
      width 100%
      height 100%
      font-size 15px
      color $color-text
</style>
