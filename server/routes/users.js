var router = require('koa-router')()
var utils = require('../utils')
router.prefix('/users')

/**
 * 返回数据
 * 1.status  0 请求成功
 * 2.errorCode 0==>用户不存在  1==>密码错误
 */
router.post('/login', function * (next) {
  var data = Object.assign({}, utils.data)
  data.msg = '此用户不存在'
  data.status = 1
  var user = this.request.body
  console.log('登录信息')
  console.log(user)
  var users = utils.getAllUser()
  var reg = /^\d+$/
  /**
   * 默认是编号登录flag=id*
   * @type {string}
   */
  var flag = 'id'
  reg.test(user.account) ? null : flag = 'account'
  users.forEach(function (item) {
    if (item[flag] == user.account) {
      if (item.password === user.password) {
        data.msg = '登录成功'
        data.status = 0
        data.data = item
      } else {
        data.msg = '密码错误'
        data.errorCode = 1
      }
    }
  })
  data = JSON.stringify(data)
  this.body = data
})
/**
 * 检测手机号或者用户名是否已经存在
 */
router.post('/isExist', function * (next) {
  var data = Object.assign({}, utils.data)
  var content = this.request.body
  console.log('判断手机号或者账户是否存在')
  console.log(content)
  data = utils.isExist(content.content, data)
  this.body = JSON.stringify(data)
})
router.post('/register', function * (next) {
  var data = Object.assign({}, utils.data)
  var content = this.request.body
  console.log('注册信息')
  console.log(content)
  var returnDataAccount = utils.isExist(content.account, data)
  // account已经存在
  if (returnDataAccount.status === 1) {
    this.body = JSON.stringify(returnDataAccount)
    return
  }
  var returnDataPhone = utils.isExist(content.phone, data)
  // /* 手机号已经存在*/
  if (returnDataPhone.status === 1) {
    this.body = JSON.stringify(returnDataPhone)
    return
  }
  var user = Object.assign({}, content)
  var users = utils.getAllUser()
  users.length > 0 ? (user.id = Number(users[users.length - 1].id) + 1) : user.id = 1
  users.push(user)
  data.data = user
  utils.writeUsers(users)
  var actions = utils.getAllActions()
  //同步到actions中，做初始化
  actions.push({id: user.id, selectedIDs: [], voteID: []})
  utils.writeActions(actions)
  this.body = JSON.stringify(data)
})
router.get('/getAllUser', function * (next) {
  var data = Object.assign({}, utils.data)
  var users = utils.getAllUser()
  var actions = utils.getAllActions()
  var allUsersInfo = []
  users.forEach(function (item) {
    var obj = {}
    obj.id = item.id
    obj.account = item.account
    obj.sex = item.sex
    obj.des = item.des
    obj.selectedIDs = []
    obj.voteID = []
    actions.forEach(function (item2) {
      if (item2.id == item.id) {
        obj.selectedIDs = (item2.selectedIDs && item2.selectedIDs.length > 0) ? item2.selectedIDs : []
        obj.voteID = (item2.voteID && item2.voteID.length > 0) ? item2.voteID : []
      }
    })
    allUsersInfo.push(obj)
  })
  data.data = allUsersInfo
  data = JSON.stringify(data)
  this.body = data
})
router.post('/getAllVotedUser', function * (next) {
  var data = Object.assign({}, utils.data)
  var id = this.request.body.id
  console.log('根据个人id获取所有投票的人数和排位名次')
  console.log(id)
  var actions = utils.getAllActions()
  var users = utils.getAllUser()
  //voteID表示都有谁投了当事人
  //selectedIDs表示当事人都投过谁

  var datas = []
  var voted = []
  var ranking = 0
  var votedNums = 0
  var pInfo = {}
  users.forEach(function (item) {
    if (item.id == id) {
      pInfo.id = item.id
      pInfo.account = item.account
      pInfo.des = item.des
      pInfo.sex = item.sex
    }
  })
  for (var i = 0; i < actions.length; i++) {
    var rec = actions[i]
    if (rec.id == id) {
      if (rec.voteID && rec.voteID.length > 0) {
        voted = voted.concat(rec.voteID)
      }
    }
  }
  actions.sort(function (a, b) {
    b.voteID = b.voteID ? b.voteID : []
    a.voteID = a.voteID ? a.voteID : []
    return b.voteID.length - a.voteID.length
  })
  actions.forEach(function (item, index) {
    if (item.id == id) {
      votedNums = item.voteID.length
      ranking = Number(index) + 1
    }
  })

  voted.forEach(function (item) {
    users.forEach(function (allUserItem) {
      if (allUserItem.id == item) {
        datas.push(allUserItem)
      }
    })
  })
  pInfo.ranking = ranking
  pInfo.votedNums = votedNums
  data.data = {votedUsers: datas, perInfo: pInfo}
  this.body = JSON.stringify(data)
})
router.post('/searchByContent', function * (next) {
  var data = Object.assign({}, utils.data)
  var content = this.request.body.content
  console.log('搜索内容：' + content)
  var reg = /^\d+$/
  var users = utils.getAllUser()
  var actions = utils.getAllActions()
  var searchedUserInfo = []
  users.forEach(function (item) {
    if (reg.test(content)) {
      // 表示以编号为基础进行搜索
      if (item.id == content) {
        var obj = {}
        obj.id = item.id
        obj.account = item.account
        obj.sex = item.sex
        obj.des = item.des
        obj.selectedIDs = []
        obj.voteID = []
        actions.forEach(function (item2) {
          if (item2.id == item.id) {
            obj.selectedIDs = (item2.selectedIDs && item2.selectedIDs.length > 0) ? item2.selectedIDs : []
            obj.voteID = (item2.voteID && item2.voteID.length > 0) ? item2.voteID : []
          }
        })
        searchedUserInfo.push(obj)
      }
    } else {
      if (item.account.indexOf(content) >= 0) {
        var obj1 = {}
        obj1.id = item.id
        obj1.account = item.account
        obj1.sex = item.sex
        obj1.des = item.des
        obj1.selectedIDs = []
        obj1.voteID = []
        actions.forEach(function (item2) {
          if (item2.id == item.id) {
            obj1.selectedIDs = (item2.selectedIDs && item2.selectedIDs.length > 0) ? item2.selectedIDs : []
            obj1.voteID = (item2.voteID && item2.voteID.length > 0) ? item2.voteID : []
          }
        })
        searchedUserInfo.push(obj1)
      }
    }

  })
  data.data = searchedUserInfo
  this.body = JSON.stringify(data)
})
module.exports = router
