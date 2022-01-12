/*
 @author zhanggujun
 @date 2022-01-11 13:48
 @email zhanggujun@sina.cn
 @github https://github.com/zhanggujun
*/

class ErrorHandler{
  constructor(app){
    this.app = app
    this.handler()
  }
  handler(){
    this.app.on('error',(err,ctx) => ctx.log.error(ctx,err,'监听到的error'))
  }
}

export default ErrorHandler
