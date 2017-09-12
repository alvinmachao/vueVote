var router = require('koa-router')()
var utils = require('../utils')
router.prefix('/action')

router.post('/vote', function * (next) {
  var data = Object.assign({}, utils.data)
  var content = this.request.body
  var curId = content.curId
  var targetId = content.targetId
  console.log(curId + ' 投给 ' + targetId)
  //表示是否符合规则 1.不能重复投给一个人 2.只有无票投票权
  var bok = true
  var actions = utils.getAllActions()
  for (var i = 0; i < actions.length; i++) {
    var item = actions[i]
    if (curId == item.id) {
      if (item.selectedIDs.length >= 5) {
        data.status = 1
        data.msg = '每人只有5票投票权'
        bok = false
        this.body = JSON.stringify(data)
        break
      } else if (item.selectedIDs.indexOf(targetId) >= 0) {
        bok = false
        data.status = 1
        data.msg = '不能重复投给同一个人'
        this.body = JSON.stringify(data)
        break
      } else {
        item.selectedIDs.push(targetId)
      }
    }
  }
  if (bok) {
    for (let i = 0; i < actions.length; i++) {
      let item = actions[i]
      if (targetId == item.id) {
        item.voteID.push(curId)
      }
    }
    utils.writeActions(actions)
    this.body = JSON.stringify(data)
  }
})

router.get('/foo', function * (next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  })
})

module.exports = router
