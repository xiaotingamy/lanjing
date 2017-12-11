import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)

// 滚动条滚回顶部
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes
})

// 路由钩子
router.beforeEach(({meta, path}, from, next) => {
  let {requiresAuth = false} = meta
  let isLogin = Boolean(store.state.token)
  /*
    访问不需要权限的 设置meta {requiresAuth: false}
    注册也要设置成 requiresAuth: false
  */
  if (requiresAuth && !isLogin && path !== '/login') {
    return next({path: '/login'})
  }
  // 如果登录了以后再访问reg和login 则路由到主页
  if (isLogin && (path === '/login' || path === '/reg')) {
    return next({path: '/'})
  }
  next()
})

export default router
