var Koa = require('koa')
var app = new Koa()
// x-response-time
app.use(function * (next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  this.set('X-Response-Time', ms + 'ms')
})
// logger

app.use(function * (next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

// response

app.use(function * () {
  //this  is the Context
  //this.request  is a koa Request
  // this.response  is a koa Response
})
app.on('error', function (err) {
  console.error('server error', err)
})
app.listen(3000)
