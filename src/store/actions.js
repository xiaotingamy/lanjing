import * as types from './mutation-type'
// import {localLogin} from 'api/user'
// import {ERR_OK} from 'api/config'
// import router from '../router'
//
// export const userLogin = function ({commit}, data) {
//   localLogin(data).then((res) => {
//     console.log(res)
//     if (res.code === ERR_OK) {
//       commit(types.USER_SIGNIN, res.data.access_token)
//       router.replace({path: '/'})
//     }
//   })
// }
// function findIndex (list, skuitem) {
//   return list.findIndex((item) => {
//     return item.id === skuitem.id
//   })
// }
function selectedList (arr, index) {
  let _arr = arr.slice()
  for (let i in _arr) {
    if (i === String(index)) {
      _arr[i] = Object.assign({}, _arr[i], {checked: true})
    } else {
      _arr[i] = Object.assign({}, _arr[i], {checked: false})
    }
  }
  return _arr
}
export const selectSku = function ({state, commit}, {list, index}) {
  let newList = selectedList(list, index)
  let {img_url, price, stock} = list[index]
  commit(types.SET_SKULIST, newList)
  commit(types.SET_MAJORIMAGE, img_url)
  commit(types.SET_PRICE, price)
  commit(types.SET_TOTALSTOCK, stock)
  commit(types.SET_CURRENT_INDEX, index)
}
