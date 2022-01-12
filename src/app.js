import Koa from 'koa'
const app = new Koa()

// middleware
import InitMiddleware from '@/middleware/init-middleware'
import LogMiddleware from '@/middleware/log-middleware'
import BeforeMiddleware from '@/middleware/before-middleware'
import RouterMiddleware from '@/middleware/router-middleware'

// error-handler
import ErrorHandler from '@/handler/error'

// 初始化(挂在一些参数到ctx上)
new InitMiddleware(app)
// before-middleware
new BeforeMiddleware(app)
// 日志
new LogMiddleware(app)
// router-middleware
new RouterMiddleware(app)

// error-handler
new ErrorHandler(app)

export default app
