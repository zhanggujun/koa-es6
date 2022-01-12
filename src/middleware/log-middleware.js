/*
 @author zhanggujun
 @date 2022-01-11 18:15
 @email zhanggujun@sina.cn
 @github https://github.com/zhanggujun
*/
class LogMiddleware{
  constructor(app){
    this.app = app
    this.register()
  }
  register(){
    this.app.use(async (ctx,next) => {
      const start = new Date()
      try{
        await ctx.log.request(ctx,start)
        await next()
        const end = new Date()
        await ctx.log.response(ctx,start,end)
      }catch(ex){
        await ctx.log.error(ctx,ex,'路由中间件出错')
        await next()
      }
    })
  }
}

export default LogMiddleware
