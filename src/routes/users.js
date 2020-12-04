import { Controller,Post,Get } from '../decorator'

@Controller('/users')
class Users{
  @Get('/string')
  async getString(ctx){
    ctx.body = '装饰器路由在users返回的string'
  }
}

export default Users
