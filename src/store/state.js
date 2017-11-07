import {isLoggedIn} from 'common/js/cache'

const state = {
  productDescription: {},
  token: isLoggedIn() || null
}

export default state
