export default {
  local: window.sessionStorage,
  getAllLocalInfo () {
    var allInfos = this.local.getItem('vote')
    if (allInfos === null) {
      return ''
    }
    return JSON.parse(allInfos)
  },
  getLoginStatus () {
    var allInfos = this.getAllLocalInfo()
    return (allInfos === '') ? false : allInfos.isLogin
  },
  getLoginUserInfo () {
    var allInfos = this.getAllLocalInfo()
    return (allInfos === '') ? {} : allInfos.userInfo
  },
  updateLocalInfo (info) {
    this.local.setItem('vote', JSON.stringify(info))
  },
  deleteLocalInfo () {
    this.local.removeItem('vote')
  }
}
