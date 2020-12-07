import { Controller,Post,Get } from '../decorator'

@Controller('/login')
class Index{
  @Get('/string')
  async getString(ctx){
    ctx.body = {
      code: true,
      text: '装饰器路由在login返回的string'
    }
  }
  @Get('/hello')
  async getPost(ctx){
    ctx.body = 'hello word'
  }
}

export default Index
