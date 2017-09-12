import {
  getAllUser,
  login,
  register,
  isExist,
  getAllVotedUser,
  getSearchedUsers,
  vote
} from '../utils'
import {
  GET_ALL_USER, LOGIN_ING, REGISTER, ISEXIST,
  VOTED_USERS, SEARCHED_USER_INFO, VOTED
} from './mutation-types.js'

export default {
  async getAllUser ({commit}) {
    let response = await getAllUser().then(function (response) {
      return response.json()
    })
    commit(GET_ALL_USER, response)
  },
  async login ({commit}, userInfo) {
    let response = await login(userInfo).then(function (response) {
      return response.json()
    })
    commit(LOGIN_ING, response)
  },
  async register ({commit}, userInfo) {
    let response = await register(userInfo).then(function (response) {
      return response.json()
    })
    commit(REGISTER, response)
  },
  async isExist ({commit}, e) {
    let response = await isExist(e.target.value).then(function (response) {
      return response.json()
    })
    commit(ISEXIST, response)
  },
  async getAllVotedUser ({commit}, id) {
    let response = await getAllVotedUser(id).then(function (response) {
      return response.json()
    })
    commit(VOTED_USERS, response)
  },
  async getSearchedUsers ({commit}, content) {
    let response = await getSearchedUsers(content).then(function (response) {
      return response.json()
    })
    commit(SEARCHED_USER_INFO, response)
  },
  async vote ({commit}, obj) {
    let response = await vote(obj).then(function (response) {
      return response.json()
    })
    commit(VOTED, response)
  }
}
