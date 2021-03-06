var app = require('koa')()
var logger = require('koa-logger')
var json = require('koa-json')
var views = require('koa-views')
var onerror = require('koa-onerror')

var actions = require('./routes/actions')
var users = require('./routes/users')

// error handler
onerror(app)

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade'
}))
app.use(require('koa-bodyparser')())
app.use(json())
app.use(logger())

app.use(function * (next) {
  var start = new Date
  yield next
  var ms = new Date - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

app.use(require('koa-static')(__dirname + '/public'))

// routes definition
app.use(actions.routes(), actions.allowedMethods())
app.use(users.routes(), users.allowedMethods())

module.exports = app
