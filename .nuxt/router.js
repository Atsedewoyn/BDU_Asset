import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bd6661c0 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _609d8e9f = () => interopDefault(import('..\\pages\\add_your_favorite.vue' /* webpackChunkName: "pages/add_your_favorite" */))
const _34f9e21e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0ebd4205 = () => interopDefault(import('..\\pages\\axions\\index.vue' /* webpackChunkName: "pages/axions/index" */))
const _402bace6 = () => interopDefault(import('..\\pages\\axionss.vue' /* webpackChunkName: "pages/axionss" */))
const _7126254e = () => interopDefault(import('..\\pages\\caars.vue' /* webpackChunkName: "pages/caars" */))
const _370554e3 = () => interopDefault(import('..\\pages\\cars_query.vue' /* webpackChunkName: "pages/cars_query" */))
const _4c6bb549 = () => interopDefault(import('..\\pages\\carss.vue' /* webpackChunkName: "pages/carss" */))
const _6dc6d7ed = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _777941c4 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _54b55962 = () => interopDefault(import('..\\pages\\orders\\index.vue' /* webpackChunkName: "pages/orders/index" */))
const _39e8fe1e = () => interopDefault(import('..\\pages\\request\\index.vue' /* webpackChunkName: "pages/request/index" */))
const _6c6c7a53 = () => interopDefault(import('..\\pages\\sellAxions\\index.vue' /* webpackChunkName: "pages/sellAxions/index" */))
const _6f7c8390 = () => interopDefault(import('..\\pages\\sign_up\\index.vue' /* webpackChunkName: "pages/sign_up/index" */))
const _64bd3e9a = () => interopDefault(import('..\\pages\\admin\\addAxions\\index.vue' /* webpackChunkName: "pages/admin/addAxions/index" */))
const _2ea249c2 = () => interopDefault(import('..\\pages\\admin\\cars\\index.vue' /* webpackChunkName: "pages/admin/cars/index" */))
const _0433d97f = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _3a4e01ad = () => interopDefault(import('..\\pages\\axions\\_id.vue' /* webpackChunkName: "pages/axions/_id" */))
const _1040f5e7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _bd6661c0,
    name: "about"
  }, {
    path: "/add_your_favorite",
    component: _609d8e9f,
    name: "add_your_favorite"
  }, {
    path: "/admin",
    component: _34f9e21e,
    name: "admin"
  }, {
    path: "/axions",
    component: _0ebd4205,
    name: "axions"
  }, {
    path: "/axionss",
    component: _402bace6,
    name: "axionss"
  }, {
    path: "/caars",
    component: _7126254e,
    name: "caars"
  }, {
    path: "/cars_query",
    component: _370554e3,
    name: "cars_query"
  }, {
    path: "/carss",
    component: _4c6bb549,
    name: "carss"
  }, {
    path: "/contact",
    component: _6dc6d7ed,
    name: "contact"
  }, {
    path: "/login",
    component: _777941c4,
    name: "login"
  }, {
    path: "/orders",
    component: _54b55962,
    name: "orders"
  }, {
    path: "/request",
    component: _39e8fe1e,
    name: "request"
  }, {
    path: "/sellAxions",
    component: _6c6c7a53,
    name: "sellAxions"
  }, {
    path: "/sign_up",
    component: _6f7c8390,
    name: "sign_up"
  }, {
    path: "/admin/addAxions",
    component: _64bd3e9a,
    name: "admin-addAxions"
  }, {
    path: "/admin/cars",
    component: _2ea249c2,
    name: "admin-cars"
  }, {
    path: "/article/:id?",
    component: _0433d97f,
    name: "article-id"
  }, {
    path: "/axions/:id",
    component: _3a4e01ad,
    name: "axions-id"
  }, {
    path: "/",
    component: _1040f5e7,
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
