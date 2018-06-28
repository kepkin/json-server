const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// log headers
server.use((req, res, next) => {
  console.log(req.headers)
  next()
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
    console.log(req.body)
  }
  // Continue to JSON Server router
  next()
})


// Use default router
server.use(router)
server.listen(80, () => {
  console.log('JSON Server is running on PORT 80')
})
