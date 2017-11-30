import UserCenter from 'components/user-center/user-center'
import Homepage from 'components/homepage/homepage'
import Shopcart from 'components/shopcart/shopcart'
import Search from 'components/search/search'
import Login from 'components/login/login'
import Reg from 'components/reg/reg'
export default [
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    path: '/homepage',
    component: Homepage
  },
  {
    path: '/cart',
    component: Shopcart
  },
  {
    path: '/user',
    component: UserCenter,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/reg',
    component: Reg
  },
  {
    path: '/search',
    component: Search
  }
]
