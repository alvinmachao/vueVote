import { CLOSE_LOGIN, LOGIN_LOGIN } from './mutation-types'

export default {
  [CLOSE_LOGIN] (state) {
    state.showLogin = false
  },
  [LOGIN_LOGIN] (state) {
    state.showLogin = true
  }
}
