import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'

promise.polyfill()

/**
 * 获取所有的用户
 */
export const getAllUser = () => fetch('/api/users/getAllUser')
/**
 * 登录接口
 * @param obj 用户账户和密码信息
 */
export const login = (obj) => fetch('/api/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})
/**
 * 注册接口
 * @param obj 注册对象
 */
export const register = (obj) => fetch('/api/users/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})
/**
 * 获取search的用户
 * @param content 搜索内容
 */
export const search = (content) => fetch('/api/search', {content})
/**
 * 验证手机号或者账户是否存在
 * @param isExist
 */

export const isExist = (content) => fetch('/api/users/isExist', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({content})
})
/**
 * 获取所有为当前用户的投票的用户信息
 * @param obj
 */
export const getAllVotedUser = (id) => fetch('/api/users/getAllVotedUser', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({id})
})
/**
 * 根据搜索信息查询用户信息
 * @param obj
 */
export const getSearchedUsers = (content) => fetch('/api/users/searchByContent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({content})
})
/**
 * 根据搜索信息查询用户信息
 * @param obj
 */
export const vote = (obj) => fetch('/api/action/vote', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})
