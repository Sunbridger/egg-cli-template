const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
        name: 'wang',
        age: 12
    }
  }
}

module.exports = HomeController;
