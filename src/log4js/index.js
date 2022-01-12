import log4js from 'log4js'
import Log4Config from './config'

class Log4{
  constructor(){
    this.config = new Log4Config()
    this.initLog4()
  }
  initLog4(){
    log4js.configure(this.config.options())
    this.responseLogger = log4js.getLogger('response')
    this.requestLogger = log4js.getLogger('request')
    this.errorLogger = log4js.getLogger('error')
    this.consoleLogger = log4js.getLogger()
  }
  star(text,n = 30){
    const str = Array.from({ length: n }).map(item => '=').join('')
    return `${ str } ${ text } ${ str } \n`
  }
  error(ctx,error,text,start = new Date()){
    const message = this.context({ ctx,start,error,text })
    ctx && error && this.errorLogger.error(message)
  }
  request(ctx,start){
    const message = this.context({ ctx,start })
    ctx && this.requestLogger.info(message)
  }
  response(ctx,start,end){
    const message = this.context({ ctx,start,end })
    ctx && this.responseLogger.info(message)
  }
  context({ ctx,start,end = null,error,text } = {}){
    const { method,originalUrl,ip,query,body,params } = ctx.request || {}
    const context = {}
    context.start = ctx.format(start)
    if(end){
      context.end = ctx.format(end)
      const _start = new Date(start).getTime()
      const _end = new Date(end).getTime()
      const diff = _end - _start
      context.time = `本次请求耗时:${ diff }ms`
    }
    if(error){
      context.error = {
        name: error.name,
        message: error.message
      }
      if(text){
        context.error = { ...context.error,text }
      }
    }
    context.method = method
    context.origin = originalUrl
    context.ip = ip
    context.query = query
    context.body = body
    context.params = params
    context.response = ctx.body
    context.context = ctx || null
    let str = this.star(`${ context.start }日志开始`)
    str += `${ JSON.stringify(context, null, `\t`) } \n`
    str += this.star(`${ context.start }日志结束`)
    return str
  }
}

const log = new Log4()

export default log
