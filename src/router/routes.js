import UserCenter from 'components/user-center/user-center'
import Main from 'components/home/main/main'
import Recommend from 'components/home/recommend/homepage'
import Cate from 'components/home/cate/cate'
import Seafood from 'components/home/seafood/seafood'
import Article from 'components/home/article/article'
import Shopcart from 'components/shopcart/shopcart'
import Search from 'components/search/search'
import Login from 'components/login/login'
import Reg from 'components/reg/reg'
import Detail from 'components/good/detail/detail'
import Buy from 'components/good/buy/buy'
import Order from 'components/user-order/order/order'
import OrderBox from 'components/user-order/order-box/order-box'

export default [
  {
    path: '/',
    redirect: '/index/recommend'
  },
  {
    path: '/index',
    component: Main,
    children: [{
      path: 'recommend',
      component: Recommend
    }, {
      path: 'cate',
      component: Cate
    }, {
      path: 'article',
      component: Article
    }, {
      path: 'seafood',
      component: Seafood
    }]
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
    },
    children: [{
      path: 'order',
      component: Order,
      children: [{
        path: ':state',
        component: OrderBox
      }]
    }]
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
  },
  {
    path: '/good/:id',
    component: Detail,
    children: [{
      path: 'buy',
      component: Buy
    }]
  }
]
