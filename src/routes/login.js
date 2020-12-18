import { Controller,Post,Get,Auth } from '../decorator'

@Controller('/login')
class Index{
  @Get('/string')
  @Auth()
  async getString(ctx){
    ctx.body = {
      code: true,
      text: '装饰器路由在login返回的string'
    }
  }
  @Get('/hello')
  @Auth()
  async getPost(ctx){
    ctx.body = 'hello word'
  }
}

export default Index
