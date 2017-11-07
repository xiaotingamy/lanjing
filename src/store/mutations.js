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
  }
}

export default mutations
