import { Controller,Post,Get,Auth } from '@/decorator'

@Controller('/users')
class Users{
  @Get('/string')
  @Auth()
  async getString(ctx){
    ctx.body = '装饰器路由在users返回的string'
  }
}

export default Users
