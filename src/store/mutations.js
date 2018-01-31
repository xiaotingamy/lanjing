import * as types from './mutation-type'

const mutations = {
  [types.SET_PRODUCT_DESCRIPTION](state, description) {
    state.productDescription = description
  },
  [types.USER_SIGNIN](state, token) {
    localStorage.setItem('accessToken', token)
    state.token = token
  },
  [types.USER_SIGNOUT](state) {
    localStorage.removeItem('accessToken')
    state.token = null
  },
  [types.USER_REG](state, token) {
    localStorage.setItem('accessToken', token)
    state.token = token
  },
  [types.SET_SKULIST](state, list) {
    state.skuList = list
  },
  [types.SET_GOODNAME](state, name) {
    state.goodName = name
  },
  [types.SET_MAJORIMAGE](state, imgurl) {
    state.majorImage = imgurl
  },
  [types.SET_TOTALSTOCK](state, stock) {
    state.totalStock = stock
  },
  [types.SET_PRICE](state, price) {
    state.price = price
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }
}

export default mutations
