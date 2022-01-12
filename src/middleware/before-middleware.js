/*
 @author zhanggujun
 @date 2022-01-11 13:31
 @email zhanggujun@sina.cn
 @github https://github.com/zhanggujun
*/

import json from 'koa-json'
import parser from 'koa-bodyparser'
import logger from 'koa-logger'

export const RegisterBeforeMiddleware = app => {
  app.use(parser({ enableTypes:['json','form','text'] }))
  app.use(json())
  app.use(logger())
}


