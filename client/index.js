import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router.js'
import createStore from './store/store.js'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  /* if (to.fullPath === '/login') {
    next()
  }*/
  next()
})

router.afterEach((to, from) => {
  console.log('after eache invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
