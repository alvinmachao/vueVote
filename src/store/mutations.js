import {
  CLOSE_LOGIN, SHOW_LOGIN, GET_ALL_USER, LOGIN_ING,
  REGISTER, ISEXIST, VOTED_USERS, LOGOUT, SEARCHED_USER_INFO,
  VOTED
} from './mutation-types'
import router from '../router'
import local from './localData.js'

export default {
  [CLOSE_LOGIN] (state) {
    state.showLogin = false
  },
  [SHOW_LOGIN] (state) {
    state.showLogin = true
  },
  [GET_ALL_USER] (state, users) {
    if (users.status === 0) {
      state.allUsers = users.data
    } else {
      alert(users.msg)
    }
  },
  [LOGIN_ING] (state, user) {
    if (user.status === 0) {
      state.showLogin = false
      state.isLogin = true
      state.userInfo = user.data
      local.updateLocalInfo({isLogin: state.isLogin, userInfo: state.userInfo})
    } else {
      alert(user.msg)
    }
  },
  [REGISTER] (state, user) {
    if (user.status === 0) {
      router.push('/')
      state.isLogin = true
      state.userInfo = user.data
      alert('您的编号是' + user.data.id)
    } else {
      alert(user.msg)
    }
  },
  [ISEXIST] (state, user) {
    if (user.status === 1) {
      alert(user.msg)
    }
  },
  [VOTED_USERS] (state, users) {
    if (users.status === 0) {
      state.voteUserList = users.data.votedUsers
      state.pInfo = users.data.perInfo
    } else {
      alert(users.msg)
    }
  },
  [LOGOUT] (state) {
    state.isLogin = false
    state.userInfo = {}
    local.deleteLocalInfo()
    router.push('/')
  },
  [SEARCHED_USER_INFO] (state, users) {
    if (users.status === 0) {
      state.searchedUserInfo = users.data
    } else {
      alert(users.msg)
    }
  },
  [VOTED] (state, res) {
    if (res.status === 0) {
      window.location.reload()
    } else {
      alert(res.msg)
    }
  }
}
