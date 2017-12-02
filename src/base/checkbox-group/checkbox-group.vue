<template>
  <div class="checkbox-group" ref="group">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'checkbox-group'
  const EVENT_INPUT = 'input'
  const EVENT_CHECKED = 'checked'
  const EVENT_CANCLE_CHECKED = 'cancel-checked'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Array,
        require: true
      }
    },
    data() {
      return {
        _value: [],
        _checkboxGroup: true
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(newValue, oldValue) {
          this._value = this.value.concat()
        }
      }
    },
    mounted() {
      this.$on(EVENT_CHECKED, function (value) {
        this._value.push(value)
        this.$emit(EVENT_INPUT, this._value)
      })
      this.$on(EVENT_CANCLE_CHECKED, function (value) {
        let index = this._value.indexOf(value)
        this._value.splice(index, 1)
        this.$emit(EVENT_INPUT, this._value)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .checkbox-group
    z-index: 1
    overflow: hidden
    .checkbox
      &:last-child
        .checkbox-wrap
          border-none()
</style>
