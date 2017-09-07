import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import Search from '@/components/pages/Searches'
import Rule from '@/components/pages/Rule'
import Register from '@/components/pages/Register'
import HomePage from '@/components/pages/PHomePage'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/search:content',
      name: 'search',
      component: Search
    }, {
      path: '/rule',
      name: 'rule',
      component: Rule
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/homePage:id',
      name: 'homepage',
      component: HomePage
    }
  ]
})
router.afterEach((to, from) => {
  document.title = to.name
})
router.beforeEach((to, from, next) => {
  !(function (doc, win) {
    var docEle = doc.documentElement || doc.body
    var fn = function () {
      var width = docEle.clientWidth
      if (width > 640) {
        docEle.style.fontSize = 100 + 'px'
        return
      }
      width && (docEle.style.fontSize = 100 * (width / 640) + 'px')
    }
    win.addEventListener('resize', fn, false)
    doc.addEventListener('DOMContentLoaded', fn, false)
  }(document, window))
  next()
})
export default router