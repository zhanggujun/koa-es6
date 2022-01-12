/*
 @author zhanggujun
 @date 2022-01-11 13:36
 @email zhanggujun@sina.cn
 @github https://github.com/zhanggujun
*/

import login from '@/routes/login'
import users from '@/routes/users'

class RouterMiddleware{
  constructor(app){
    this.app = app
    this.register()
  }
  register(){
    this.app.use(login.routes(),login.allowedMethods())
    this.app.use(users.routes(),users.allowedMethods())
  }
}

export default RouterMiddleware
