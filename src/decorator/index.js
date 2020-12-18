import Router from 'koa-router'

function Controller( prefix = '' ) {
  const router = new Router()
  if (prefix)
    router.prefix(prefix)
  return function(target){
    const targetReq = Object.getOwnPropertyDescriptors(target.prototype)
    for (const v in targetReq) {
      // 排除类的构造方法
      if (v !== 'constructor') {
        let fn = targetReq[v].value
        fn(router)
      }
    }
    return router
  }
}


function Request({ url = '',method = '' } = {}) {
  return function(target,name,descriptor){
    const fn = descriptor.value
    descriptor.value = router => {
      router[method](url, async (ctx, next) => {
        await fn(ctx,next)
      })
    }
  }
}

function Auth(){ // 用户登录鉴权
  return function(target,name,descriptor){
    const fn = descriptor.value
    descriptor.value = async (ctx,next) => {
      ctx.body = { code: '装饰器auth' }
      // await fn(ctx,next)
    }
  }
}

const RequestMethod = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  OPTIONS: 'options',
  HEAD: 'head',
  PATCH: 'patch'
}

function Post(url) {
  return Request({ url, method: RequestMethod.POST })
}
function Get(url) {
  return Request({ url, method: RequestMethod.GET })
}
function Put(url) {
  return Request({ url, method: RequestMethod.PUT })
}
function Delete(url) {
  return Request({ url, method: RequestMethod.DELETE })
}
function Options(url) {
  return Request({ url, method: RequestMethod.OPTIONS })
}
function Head(url) {
  return Request({ url, method: RequestMethod.HEAD })
}
function Patch(url) {
  return Request({ url, method: RequestMethod.PATCH })
}

export { Controller,Post,Get,Put,Delete,Options,Head,Patch,Auth }
