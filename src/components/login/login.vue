<template>
  <transition name="slide">
    <div>
      <div class="login">
        <m-header title="登录"></m-header>
        <div class="login-wrapper">
          <div class="login-content">
            <div class="logo"></div>
            <ul class="form border-top-1px">
              <li class="border-bottom-1px">
                <div class="item-content">
                  <div class="item-media">
                    <span class="lnr lnr-user"></span>
                  </div>
                  <div class="item-inner">
                    <number-input v-model="cellphone" placeholder="请输入手机号" maxlength="11"></number-input>
                  </div>
                </div>
              </li>
              <li class="border-bottom-1px">
                <div class="item-content">
                  <div class="item-media">
                    <span class="lnr lnr-lock"></span>
                  </div>
                  <div class="item-inner">
                    <password-input v-model="password" placeholder="请输入密码" maxlength="20"></password-input>
                    <!--<div class="item-input">-->
                      <!--<input type="password" v-model="password" placeholder="请输入密码" maxlength="20"/>-->
                    <!--</div>-->
                  </div>
                </div>
              </li>
            </ul>
            <div class="forget">
              <span>忘记密码？</span>
            </div>
            <div class="button-group">
              <div class="button log" :class="{active: isActive}" @click="handleSubmit">登录</div>
              <router-link tag="div" to="/reg" class="button register active">注册</router-link>
            </div>
          </div>
        </div>
      </div>
      <toast ref="toast" :text="toastText"></toast>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {localLogin} from 'api/user'
  import {ERR_OK} from 'api/config'
  import md5 from 'md5'
  import MHeader from 'components/m-header/m-header'
  import NumberInput from 'base/number-input/number-input'
  import PasswordInput from 'base/password-input/password-input'
  import Toast from 'base/toast/toast'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    data() {
      return {
        cellphone: '',
        password: '',
        toastText: ''
      }
    },
    computed: {
      isActive() {
        return this.cellphone.length >= 4 && this.password.length >= 6
      },
      ...mapGetters([
        'token'
      ])
    },
    methods: {
      handleSubmit() {
        if (this.cellphone.length < 4 || this.password.length < 6) {
          return
        }
        var reg = /^0{0,1}(13|15|16|18|14|17)[0-9]{9}$/
        if (!reg.test(this.cellphone)) {
          this.toastText = '手机号有误'
          this.showToast()
          return
        }
        const md5Password = md5(this.password)
        const data = {
          cellphone: this.cellphone,
          password: md5Password
        }
        localLogin(data).then((res) => {
          if (res.code === ERR_OK) {
            this.userLogin(res.data.access_token)
            this.$router.replace({path: '/'})
          } else {
            this.toastText = res.msg
            this.showToast()
          }
        })
      },
      showToast () {
        this.$refs.toast.show()
      },
      ...mapMutations({
        userLogin: 'USER_SIGNIN'
      })
    },
    components: {
      MHeader,
      Toast,
      NumberInput,
      PasswordInput
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .login
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
    .login-wrapper
      position absolute
      top 44px
      bottom 0
      width 100%
      overflow hidden
      .login-content
        .logo
          width 90px
          height 67px
          bg-image('logo')
          background-size 90px 67px
          margin 50px auto
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
        .forget
          padding 20px 15px
          font-size $font-size-medium
          color $color-text-l
          text-align right
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
            &.log
              background #cbcbcb
              color $color-background-w
              &.active
                background $color-theme
            &.register
              background transparent
              border 1px solid #cbcbcb
              color #cbcbcb
              &.active
                border 1px solid $color-theme
                color $color-theme


</style>
