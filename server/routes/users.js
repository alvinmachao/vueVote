var router = require('koa-router')()

router.prefix('/users')

router.get('/login', function * (next) {
  this.body = 'this is a users/login response!'
})

router.get('/register', function * (next) {
  let data = {
    status: 0,
    error: '',
    data: {
      username: 'alvin'
    }
  }
  data = JSON.stringify(data)
  this.body = data
})
router.get('/getAllUser', function * (next) {
  let data = {
    status: 0,
    error: '',
    data: [
      {
        'ID': '1',
        'name': 'a1',
        'selectedIDs': [
          '1',
          '2',
          '3',
          '4',
          '5'
        ],
        'sex': 0,
        'voteID': [
          '1',
          '2',
          '5',
          '7',
          '9',
          '10',
          '12'
        ]
      },
      {
        'ID': '2',
        'name': 'a2',
        'voteID': [
          '1',
          '2',
          '6'
        ],
        'sex': '1',
        'selectedIDs': [
          '1',
          '2',
          '6',
          '5',
          '8'
        ]
      },
      {
        'ID': '3',
        'name': 'a3',
        'voteID': [
          '1',
          '10'
        ],
        'sex': 0,
        'selectedIDs': [
          '5',
          '7',
          '8'
        ]
      },
      {
        'ID': '4',
        'name': 'a4',
        'voteID': [
          '1',
          '10'
        ],
        'sex': 1,
        'selectedIDs': [
          '5',
          '7',
          '8'
        ]
      }]
  }
  data = JSON.stringify(data)
  this.body = data
})

module.exports = router
