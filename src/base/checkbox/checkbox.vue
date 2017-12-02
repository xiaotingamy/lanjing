<template>
  <div class="checkbox">
    <label class="checkbox-wrap">
      <input class="checkbox-input" type="checkbox" :disabled="disabled" v-model="checkValue">
      <span class="checkbox-ui">
        <i class="icon-check"></i>
      </span>
      <span class="checkbox-label">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'checkbox'

  const EVENT_CHECKED = 'checked'
  const EVENT_CANCLE_CHECKED = 'cancel-checked'
  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: [Boolean, String],
        require: true
      },
      label: {
        type: [Boolean, String]
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const parent = this.$parent
      const isInGroup = parent.$data._checkboxGroup
//      const isInHorizontalGroup = isInGroup && parent.$props.horizontal
      return {
        isInGroup
//        isInHorizontalGroup
      }
    },
    computed: {
      checkValue: {
        get () {
          if (this.isInGroup) {
            return this.$parent.value.indexOf(this.label) > -1
          } else {
            return Boolean(this.value)
          }
        },
        set (newValue) {
          const emitValue = this.label && newValue ? this.label : newValue
          const parentEmitEvent = newValue ? EVENT_CHECKED : EVENT_CANCLE_CHECKED
          this.$emit(EVENT_INPUT, emitValue)
          if (this.isInGroup) {
            this.$parent.$emit(parentEmitEvent, this.label || newValue, this)
          }
        }
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .checkbox
    .checkbox-wrap
      position: relative
      display: flex
      align-items: center
      box-sizing: border-box
      width: 100%
      height: 100%
      padding: 11px 0
      line-height: 1.5
      word-break: break-word
      word-wrap: break-word
      .checkbox-input
        z-index: 1
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        opacity: 0
        &:checked
          + .checkbox-ui
            .icon-check
              display block
              width 18px
              height 18px
              bg-image('on')
              background-size 18px
              extend-click()
      .checkbox-ui
        margin-right 5px
        .icon-check
          extend-click()
          display block
          width 18px
          height 18px
          bg-image('off')
          background-size 18px


</style>
