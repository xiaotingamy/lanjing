<template>
  <transition name="slide">
    <div>
      <div class="reg">
        <m-header title="注册"></m-header>
        <div class="reg-wrapper">
          <div class="reg-content">
            <p class="slogan">注册即送200红包</p>
            <ul class="form border-top-1px">
              <li class="border-bottom-1px">
                <div class="item-content">
                  <div class="item-inner">
                    <number-input v-model="cellphone" placeholder="请输入手机号" maxlength="11"></number-input>
                  </div>
                </div>
              </li>
              <li class="border-bottom-1px">
                <div class="item-content">
                  <div class="item-inner">
                    <number-input v-model="smsCode" placeholder="请输入验证码" maxlength="6"></number-input>
                  </div>
                  <div class="item-btn">
                    <button class="get-code" :class="{active: getCodeActive}" @click="getSmsCode">获取验证码</button>
                  </div>
                </div>
              </li>
            </ul>
            <div class="check-box-wrapper">
              <check-box ref="checkBox" text="我已阅读并同意" linkText="《用户协议》" linkUrl="/" @checkToggle="handleCheckBox"></check-box>
            </div>
            <div class="button-group">
              <div class="button register" :class="{active: isActive}">下一步</div>
            </div>
          </div>
        </div>
      </div>
      <toast ref="toast" :text="toastText"></toast>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import NumberInput from 'base/number-input/number-input'
  import CheckBox from 'base/check-box/check-box'
  import Toast from 'base/toast/toast'
  export default {
    data() {
      return {
        cellphone: '',
        smsCode: '',
        checked: false,
        toastText: ''
      }
    },
    methods: {
      handleCheckBox(val) {
        console.log(val)
        this.checked = val
      },
      getSmsCode() {
        if (this.cellphone.length < 4) {
          return
        }
        var reg = /^0{0,1}(13|15|16|18|14|17)[0-9]{9}$/
        if (!reg.test(this.cellphone)) {
          this.toastText = '手机号有误'
          this.$refs.toast.show()
        }
      }
    },
    computed: {
      isActive() {
        return this.cellphone.length >= 4 && this.smsCode.length === 6
      },
      getCodeActive() {
        return this.cellphone.length >= 4
      }
    },
    components: {
      MHeader,
      NumberInput,
      CheckBox,
      Toast
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .reg
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background $color-background
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
    .reg-wrapper
      position absolute
      top 44px
      bottom 0
      width 100%
      overflow hidden
      .reg-content
        .slogan
          font-size $font-size-large-x
          color $color-increase
          margin 50px auto
          text-align center
        .form
          border-top-1px($color-border)
          li
            padding 0 15px
            background $color-background-w
            border-bottom-1px($color-border)
            .item-content
              display flex
              align-items center
              height 50px
              .item-media
                margin-right 10px
                .lnr
                  font-size $font-size-large
                  color $color-text-n
              .item-inner
                height 100%
                flex 1 1 auto
              .item-btn
                width 100px
                height 30px
                border-left 1px solid $color-border
                .get-code
                  background transparent
                  font-size $font-size-medium
                  color $color-text-l
                  border 0
                  width 100px
                  height 30px
                  text-align center
                  &.active
                    color $color-theme
        .check-box-wrapper
          padding 15px
        .button-group
          margin 10px auto
          padding 0 50px
          .button
            width 100%
            height 45px
            line-height 45px
            text-align center
            border-radius 5px
            font-size $font-size-large
            margin-bottom 10px
            &.register
              background #cbcbcb
              color $color-background-w
              &.active
                background $color-theme
</style>
