import {isLoggedIn} from 'common/js/cache'

const state = {
  productDescription: {},
  token: isLoggedIn() || null,
  skuList: [],
  majorImage: '',
  totalStock: 0,
  price: 0,
  currentIndex: -1
}

export default state
