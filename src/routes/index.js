import { Controller,Post,Get } from '../decorator'

@Controller()
class Index{
  @Get('/string')
  async getString(ctx){
    ctx.body = {
      code: true,
      text: '装饰器返回的string'
    }
  }
}

export default Index
