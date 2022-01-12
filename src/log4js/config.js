import path from 'path'

class Log4Config{
  constructor(){
    this.pathConfig()
  }
  pathConfig(){
    // 日志根目录
    this.baseLogPath = path.resolve(__dirname, '../logs')

    // 错误日志目录
    this.errorPath = 'error'
    // 错误日志文件名
    this.errorFileName = 'error'
    // 错误日志输出完整路径
    this.errorLogPath = `${ this.baseLogPath }/${ this.errorPath }/${ this.errorFileName }`

    // 请求日志目录
    this.requestPath = 'request'
    // 请求日志文件名
    this.requestFileName = 'request'
    // 请求日志输出完整路径
    this.requestLogPath = `${ this.baseLogPath }/${ this.requestPath }/${ this.requestFileName }`

    // 响应日志目录
    this.responsePath = 'response'
    // 响应日志文件名
    this.responseFileName = 'response'
    // 响应日志输出完整路径
    this.responseLogPath = `${ this.baseLogPath }/${ this.responsePath }/${ this.responseFileName }`
  }
  appenders(path,filename){
    return {
      type: 'dateFile',
      filename,
      // 以时间格式保存
      pattern: '-yyyy-MM-dd-hh.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      // 超过10M新建日志
      maxLogSize: 1024 * 1024 * 10,
      // 保留最新的20个日志
      numBackups: 20,
      backups: 20,
      path,
      layout:{
        type: 'messagePassThrough'
      }
    }
  }
  options(){
    const error = this.appenders(this.errorPath,this.errorLogPath)
    const request = this.appenders(this.requestPath,this.requestLogPath)
    const response = this.appenders(this.responsePath,this.responseLogPath)
    return {
      // 日志格式等设置
      appenders:{
        console:{
          type: 'console'
        },
        error,
        request,
        response
      },
      // 供外部调用的名称和对应设置定义
      categories:{
        default:{
          appenders: ['console'],
          level: 'all'
        },
        response:{
          appenders: ['response'],
          level: 'info'
        },
        error:{
          appenders: ['error'],
          level: 'error'
        },
        request:{
          appenders: ['request'],
          level: 'info'
        }
      },
      baseLogPath: this.baseLogPath,
      replaceConsole: true
    }
  }
}

export default Log4Config
