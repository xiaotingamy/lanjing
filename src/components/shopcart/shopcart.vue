<template>
  <div class="shopcart-wrapper">
    <scroll ref="cartList" class="shopcart-content">
      <div>
        <split></split>
        <div class="cart-group border-bottom-1px">
          <div class="head">
            <div class="left">
              <checkbox v-model="allChecked" @input="checkedAllItems"></checkbox>
              <span class="title">鲸选</span>
            </div>
            <div class="right">
              <span class="operate" @click="edit">{{operateText}}</span>
            </div>
          </div>
          <div class="list">
            <checkbox-group v-model="checkboxModel">
              <div class="item" v-for="(item, index) in cartItems" :key="item.id">
                <checkbox :label="item.id"></checkbox>
                <div class="content">
                  <div class="img">
                    <img :src="item.imgUrl">
                  </div>
                  <div class="text-box">
                    <div class="name-box">
                      <p class="name" v-show="!editable">{{item.name}}</p>
                      <div class="cartcontrol-wrapper" v-show="editable">
                        <cartcontrol :good="item" :indexNum="index" @increase="increaseNum" @decrease="decreaseNum"></cartcontrol>
                      </div>
                      <p class="sku">{{item.sku}}</p>
                    </div>
                    <div class="price-box">
                      <p class="price">￥{{item.singlePrice}}</p>
                      <p class="quantity" v-show="!editable">x{{item.count}}</p>
                    </div>
                  </div>
                </div>
                <div class="delete" :class="{'show': editable}">删除</div>
              </div>
            </checkbox-group>
          </div>
        </div>
      </div>
      <p>选择的数组：{{this.checkboxModel}}</p>
    </scroll>
    <div class="cart-bottom">
      <div class="left border-top-1px">
        <div class="checkbox-wrapper">
          <div class="checkbox-container">
            <checkbox v-model="allChecked" @input="checkedAllItems"></checkbox>
          </div>
          <span class="title">全选</span>
        </div>
        <div class="total-amount">
          <p class="red">合计：￥{{totalPrice}}</p>
          <p>{{deliveryDesc}}</p>
        </div>
      </div>
      <div class="submit-btn" :class="{'pay': this.checkboxModel.length > 0}" @click="pay">结算</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Cartcontrol from 'components/cartcontrol/cartcontrol'
  import Split from 'components/split/split'
  import Scroll from 'base/scroll/scroll'
  import Checkbox from 'base/checkbox/checkbox'
  import CheckboxGroup from 'base/checkbox-group/checkbox-group'
  export default {
    data() {
      return {
        allChecked: false,
        cartItems: [{
          id: '1',
          name: '百草味多味花生210g 休闲零食炒货特产花生豆小吃',
          sku: '500g',
          singlePrice: '9.00',
          count: 10,
          stock: 4,
          imgUrl: 'http://img.alicdn.com/bao/uploaded/i2/725677994/TB1Gk0xehHI8KJjy1zbXXaxdpXa_!!0-item_pic.jpg_220x10000Q75s50.jpg_.webp'
        }, {
          id: '2',
          name: '百草味无核白葡萄干200g 新疆吐鲁番干果特产零食',
          sku: '200g',
          singlePrice: '50.00',
          count: 2,
          stock: 15,
          imgUrl: 'http://img.alicdn.com/bao/uploaded/i1/725677994/TB1hlJFXQfb_uJkSnhJXXbdDVXa_!!0-item_pic.jpg_220x10000Q75s50.jpg_.webp'
        }, {
          id: '3',
          name: '百草味白芝麻猪肉脯180g 靖江特产肉脯美食零食小吃小包装',
          sku: '200g',
          singlePrice: '10.00',
          count: 2,
          stock: 4,
          imgUrl: 'http://img.alicdn.com/bao/uploaded/i2/725677994/TB2av6rf8DH8KJjSspnXXbNAVXa_!!725677994.jpg_220x10000Q75s50.jpg_.webp'
        }],
        deliveryPrice: 0,
        checkboxModel: ['1', '2'],
        editable: false
      }
    },
    computed: {
      operateText() {
        return this.editable ? '完成' : '编辑'
      },
      totalPrice() {
        let total = 0
        this.selectedCartItems = this.cartItems.filter((item) => {
          return this.checkboxModel.indexOf(item.id) > -1
        })
        this.selectedCartItems.forEach((item) => {
          total += item.singlePrice * item.count
        })
        return total
      },
      deliveryDesc() {
        return this.deliveryPrice ? `需要${this.deliveryPrice}运费` : '包邮'
      }
    },
    mounted() {
      if (this.checkboxModel.length === this.cartItems.length) {
        this.allChecked = true
      }
    },
    methods: {
      checkedAllItems() {
        if (this.allChecked) {
          this.checkboxModel = []
          this.cartItems.forEach((item) => {
            this.checkboxModel.push(item.id)
          })
        } else {
          this.checkboxModel = []
        }
      },
      pay() {
        if (this.checkboxModel.length > 0) {
          window.alert(`支付 ${this.totalPrice} 元`)
        }
      },
      edit() {
        this.editable = !this.editable
      },
      increaseNum(value, index) {
        this.$set(this.cartItems[index], 'count', value)
      },
      decreaseNum(value, index) {
        this.$set(this.cartItems[index], 'count', value)
      }
    },
    watch: {
      checkboxModel: {
        handler(newValue, oldValue) {
          if (this.checkboxModel.length === this.cartItems.length) {
            this.allChecked = true
          } else {
            this.allChecked = false
          }
        },
        deep: true
      }
    },
    components: {
      Cartcontrol,
      Split,
      Scroll,
      Checkbox,
      CheckboxGroup
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .shopcart-wrapper
    position absolute
    top 0
    bottom 49px
    width 100%
    overflow hidden
    .shopcart-content
      position absolute
      top 0
      bottom 50px
      width 100%
      .cart-group
        border-bottom-1px($color-border)
        background #fff
        margin-bottom 10px
        .head
          height 45px
          padding 0 15px
          display flex
          align-items center
          justify-content space-between
          .left
            flex 1
            display flex
            align-items center
            .checkbox
              margin-right 5px
            .title
              font-size $font-size-medium
          .right
            .operate
              font-size $font-size-medium
              color $color-text-n
        .list
          overflow hidden
          .item
            display flex
            align-items center
            background $color-background
            margin-bottom 10px
            position relative
            .checkbox
              padding-left 15px
              margin-right 5px
            .content
              display flex
              align-items center
              padding: 6px 15px 6px 5px
              flex 1
              .img
                display block
                width 90px
                height 90px
                flex 0 0 90px
                margin-right 10px
                img
                  display block
                  width 100%
                  height 100%
              .text-box
                flex 1
                .name-box
                  font-size $font-size-medium
                  color $color-text
                  line-height 1.6
                  .name
                    display: -webkit-box
                    overflow: hidden
                    text-overflow: ellipsis
                    -webkit-box-orient: vertical
                    -webkit-line-clamp: 2
                  .sku
                    margin-top 3px
                    color $color-text-n
                    font-size $font-size-small
                  .cartcontrol-wrapper
                    padding-bottom 15px
                .price-box
                  display flex
                  align-items center
                  justify-content space-between
                  font-size $font-size-medium
                  color $color-text-l
                  margin-top 9px
                  .price
                    color $color-theme
            .delete
              position: absolute
              top: 0
              right: -60px
              background: #f8484a
              color: #fff
              width: 60px
              height: 100%
              display: flex
              align-items: center
              justify-content: center
              font-size: $font-size-medium
              transition: all 0.2s
              &.show
                transform:translate(-60px, 0)
                z-index: 1
    .cart-bottom
      position fixed
      bottom 49px
      left 0px
      width 100%
      height 50px
      background $color-background-w
      display flex
      justify-content space-between
      .left
        padding-right: 10px
        border-top-1px($color-border)
        padding-left: 15px
        display flex
        align-items center
        justify-content space-between
        flex 1
        height 50px
        .checkbox-wrapper
          display flex
          align-items center
          .checkbox
            margin-right 5px
          .title
            font-size $font-size-medium
            color $color-text-n
        .total-amount
          font-size $font-size-small
          text-align right
          line-height 1.6
          color $color-text-l
          .red
            color $color-theme
      .submit-btn
        width 110px
        background #ccc
        color #fff
        text-align center
        line-height 50px
        &.pay
          background $color-theme

</style>
