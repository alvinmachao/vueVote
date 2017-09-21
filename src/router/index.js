import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: function (resolve) {
        require(['@/components/pages/index'], resolve)
      }
    }, {
      path: '/search:content',
      name: 'search',
      component: function (resolve) {
        require(['@/components/pages/Searches'], resolve)
      }
    }, {
      path: '/rule',
      name: 'rule',
      component: function (resolve) {
        require(['@/components/pages/Rule'], resolve)
      }
    }, {
      path: '/register',
      name: 'register',
      component: function (resolve) {
        require(['@/components/pages/Register'], resolve)
      }
    }, {
      path: '/homePage:id',
      name: 'homepage',
      component: function (resolve) {
        require(['@/components/pages/PHomePage'], resolve)
      }
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
      width && (docEle.style.fontSize = 100 * (width / 640) + 'px')
    }
    win.addEventListener('resize', fn, false)
    doc.addEventListener('DOMContentLoaded', fn, false)
  }(document, window))
  var path = to.path
  /**
   * 没有登录的情况 不能进去个人中心页面
   */
  if ((path.indexOf('homePage') >= 0)) {
    router.push('/')
  }
  next()
})
export default router
