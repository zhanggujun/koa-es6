import Koa from 'koa'
const app = new Koa()

import json from 'koa-json'
import onerror from 'koa-onerror'
import parser from 'koa-bodyparser'
import logger from 'koa-logger'

import Middleware from './middleware'

// error handler
onerror(app)

const list = [
  parser({ enableTypes:['json','form','text'] }),
  json(),
  logger()
]

new Middleware(app).system(list)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

export default app
