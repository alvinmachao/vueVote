var fs = require('fs')

module.exports = {
  /**
   * 返回数据格式
   * status 0 =>成功 1 =>失败 msg:信息
   * @type {{status: number, msg: string}}
   */
  data: {
    status: 0,
    msg: '成功'
  },
  getAllUser () {
    var users = fs.readFileSync('./data/users.json', 'utf-8')
    if (!users) {
      return []
    }
    return JSON.parse(users)
  },
  getAllActions () {
    var actions = fs.readFileSync('./data/actions.json', 'utf-8')
    if (!actions) {
      return []
    }
    return JSON.parse(actions)
  },
  writeUsers (users) {
    fs.writeFileSync('./data/users.json', JSON.stringify(users))
  },
  writeActions (actions) {
    fs.writeFileSync('./data/actions.json', JSON.stringify(actions))
  },
  register (user, callback) {
    var users = this.getAllUser()
    users.length > 0 ? (user.id = Number(users[users.length - 1].id) + 1) : user.id = 1
    users.push(user)
    this.writeUsers(users, callback)
  },
  isExist (content, data) {
    var users = this.getAllUser()
    var reg = /^\d+$/
    /**
     * 默认要验证的是手机号 flag=phone;
     * flag = 'account'表示要验证的是账户名字
     * @type {string}
     */
    var flag = 'phone'
    var msg = '此手机号已经被注册'
    if (!reg.test(content)) {
      flag = 'account'
      msg = '此用户名已存在'
    }
    users.forEach(function (item) {
      if (item[flag] == content) {
        data.status = 1
        data.msg = msg
      }
    })
    return data
  }
}
