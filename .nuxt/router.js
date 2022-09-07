import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f02b42a = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _5a418056 = () => interopDefault(import('..\\pages\\add_your_favorite.vue' /* webpackChunkName: "pages/add_your_favorite" */))
const _3aa071b0 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5329499c = () => interopDefault(import('..\\pages\\axionss.vue' /* webpackChunkName: "pages/axionss" */))
const _911380e2 = () => interopDefault(import('..\\pages\\caars.vue' /* webpackChunkName: "pages/caars" */))
const _2e24f46d = () => interopDefault(import('..\\pages\\cars_query.vue' /* webpackChunkName: "pages/cars_query" */))
const _3c75077f = () => interopDefault(import('..\\pages\\carss.vue' /* webpackChunkName: "pages/carss" */))
const _f4d0bb12 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _252f26ce = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _5dbc1598 = () => interopDefault(import('..\\pages\\orders\\index.vue' /* webpackChunkName: "pages/orders/index" */))
const _5c2cb248 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _51b9c8a8 = () => interopDefault(import('..\\pages\\request\\index.vue' /* webpackChunkName: "pages/request/index" */))
const _f16563cc = () => interopDefault(import('..\\pages\\sign_up\\index.vue' /* webpackChunkName: "pages/sign_up/index" */))
const _26f5ee72 = () => interopDefault(import('..\\pages\\admin\\addproducts\\index.vue' /* webpackChunkName: "pages/admin/addproducts/index" */))
const _7652a6b0 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _004a481d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4f02b42a,
    name: "about"
  }, {
    path: "/add_your_favorite",
    component: _5a418056,
    name: "add_your_favorite"
  }, {
    path: "/admin",
    component: _3aa071b0,
    name: "admin"
  }, {
    path: "/axionss",
    component: _5329499c,
    name: "axionss"
  }, {
    path: "/caars",
    component: _911380e2,
    name: "caars"
  }, {
    path: "/cars_query",
    component: _2e24f46d,
    name: "cars_query"
  }, {
    path: "/carss",
    component: _3c75077f,
    name: "carss"
  }, {
    path: "/contact",
    component: _f4d0bb12,
    name: "contact"
  }, {
    path: "/login",
    component: _252f26ce,
    name: "login"
  }, {
    path: "/orders",
    component: _5dbc1598,
    name: "orders"
  }, {
    path: "/product",
    component: _5c2cb248,
    name: "product"
  }, {
    path: "/request",
    component: _51b9c8a8,
    name: "request"
  }, {
    path: "/sign_up",
    component: _f16563cc,
    name: "sign_up"
  }, {
    path: "/admin/addproducts",
    component: _26f5ee72,
    name: "admin-addproducts"
  }, {
    path: "/product/:id",
    component: _7652a6b0,
    name: "product-id"
  }, {
    path: "/",
    component: _004a481d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
