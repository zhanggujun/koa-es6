/*
 @author zhanggujun
 @date 2022-01-11 18:15
 @email zhanggujun@sina.cn
 @github https://github.com/zhanggujun
*/

import { format } from '@/utils'
import log from '@/log4js'

class InitMiddleware{
  constructor(app){
    this.app = app
    this.register()
  }
  register(){
    this.app.use(async (ctx,next) => {
      ctx.format = format
      ctx.log = log
      await next()
    })
  }
}

export default InitMiddleware
