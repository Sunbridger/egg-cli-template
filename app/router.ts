import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.pc.index);

  router.get('/add', controller.pc.add);

};
