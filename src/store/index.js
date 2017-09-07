import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  msg: '初始状态',
  showLogin: false,
  isLogin: false
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
