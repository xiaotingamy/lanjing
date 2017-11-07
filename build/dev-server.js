'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')
const axios = require('axios')
const qs = require('qs')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)

var apiRoutes = express.Router()
//data mock
// var productListData = require('../productList.json')
// var products = productListData.products

var baseURL = 'https://www.jiayuanbank.com/rest'
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

apiRoutes.get('/banners', function (req, res) {
  const url = 'https://www.jiayuanbank.com/banners'
  axios.get(url).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

// apiRoutes.get('/product/list', function (req, res) {
//   const url = baseURL + '/product/list'
//   axios.get(url).then((response) => {
//     res.json(response.data)
//   }).catch((e) => {
//     console.log(e)
//   })
// })

// apiRoutes.get('/product/detail/:id', function (req, res) {
//   var product = products.filter(product => product.id == req.params.id)
//   res.json({
//     code: 0,
//     data: product[0]
//   })
//   // const url = baseURL + '/product/detail/' + req.params.id
//   // axios.get(url).then((response) => {
//   //   res.json(response.data)
//   // }).catch((e) => {
//   //   console.log(e)
//   // })
// })

// apiRoutes.get('/product/trade/detail', function (req, res) {
//   const url =  baseURL + '/product/trade/detail'
//   axios.get(url, {
//     params: req.query
//   }).then((response) => {
//     res.json(response.data)
//   }).catch((e) => {
//     console.log(e)
//   })
// })
//
// apiRoutes.get('/piggybank/trade/detail', function (req, res) {
//   const url =  baseURL + '/piggybank/trade/detail'
//   axios.get(url, {
//     params: req.query
//   }).then((response) => {
//     res.json(response.data)
//   }).catch((e) => {
//     console.log(e)
//   })
// })

apiRoutes.post('/login', function (req, res) {
  const url = baseURL + '/login'
  axios.post(url, qs.stringify(req.body)).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

apiRoutes.post('/authorize', function (req, res) {
  const url = baseURL + '/authorize'
  axios.post(url, qs.stringify(req.body)).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

apiRoutes.post('/access/token', function (req, res) {
  const url = baseURL + '/access/token'
  axios.post(url, qs.stringify(req.body)).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.use('/rest', apiRoutes)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
