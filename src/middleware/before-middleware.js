/*
 @author zhanggujun
 @date 2022-01-11 13:31
 @email zhanggujun@sina.cn
 @github https://github.com/zhanggujun
*/

import json from 'koa-json'
import parser from 'koa-bodyparser'
import logger from 'koa-logger'

class BeforeMiddleware{
  constructor(app){
    this.app = app
    this.register()
  }
  register(){
    this.app.use(parser({ enableTypes:['json','form','text'] }))
    this.app.use(json())
    this.app.use(logger())
  }
}

export default BeforeMiddleware
