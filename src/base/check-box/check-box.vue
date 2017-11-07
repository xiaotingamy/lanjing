<template>
  <div class="check needsclick">
    <label class="checkbox">
      <input type="checkbox" name="checkbox" v-model="checked" @click="toggleChecked">
      <div class="media">
        <i class="icon icon-form-checkbox"></i>
      </div>
      {{text}}
    </label>
    <div class="out-text" v-show="linkText">
      <router-link :to="linkUrl">{{linkText}}</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      linkText: {
        type: String,
        default: ''
      },
      linkUrl: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        checked: true
      }
    },
    methods: {
      toggleChecked() {
        if (this.checked) {
          this.checked = false
        } else {
          this.checked = true
        }
        this.$emit('checkToggle', this.checked)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .check
    display flex
    align-items center
    .checkbox
      display flex
      align-items center
      font-size $font-size-medium
      height 24px
      input[type=checkbox]
        display none
        outline: none
        border: 0
        &:checked
          + .media
            .icon-form-checkbox
              display block
              width 18px
              height 18px
              bg-image('on')
              background-size 18px
              extend-click()
      .media
        margin-right 5px
        .icon-form-checkbox
          extend-click()
          display block
          width 18px
          height 18px
          bg-image('off')
          background-size 18px
    .out-text
      font-size $font-size-medium
      a
        color $color-theme
</style>
