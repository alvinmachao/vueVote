import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import local from './localData.js'

Vue.use(Vuex)

const state = {
  msg: '初始状态',
  showLogin: false,
  isLogin: local.getLoginStatus(),
  allUsers: [],
  userInfo: local.getLoginUserInfo(),
  voteUserList: [],
  pInfo: {},
  searchedUserInfo: []

}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
