import route from '../routes'

class Middleware{
  constructor(app){
    this.app = app
  }
  system(systemList = []){
    const { app } = this
    systemList.forEach(item => app.use(item))
    this.route()
    return this
  }
  route(){
    const { app } = this
    const routeList = route || []
    routeList.forEach(item => app.use(item.routes(), item.allowedMethods()))
    return this
  }
}

export default Middleware
