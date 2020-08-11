import { Service } from 'egg';

export default class Test extends Service {

  public async sayHi() {
    return await this.ctx.model.Bury.findAll({
      where: {
        platform: 'PLATFORM_TGC_IOS'
      }
    });
  }
  public async add() {
    return await this.ctx.model.Bury.create({
      type_id: 'TGC_APP_SJJSJ',
      business_desc: '爱神的箭安静好的世界爱神的箭爱很简单',
      user_email: '7887812@qq.com',
      user_phone: '123003002',
      user_name: '往自己',
      platform: 'PLATFORM_TGC_IOS',
      category: '6a941fec-e298-4b53-8b41-37d5f9768d69'
      // is_registered: 1
    });
  }
}
