import 'babel-polyfill';
import Koa from 'koa';
import logger from 'koa-logger';
import Models from './models';
import bootstrap from './bootstrap';
import Controllers from './controllers/index.js';
import config from './config/init';

let app = new Koa();



const controllers = new Controllers(app);
controllers.setupPublicRoute()

// setup rest models
global.models = (new Models()).getDb();

const liftApp = async () => {

  // 是否要重置料庫
  await models.sequelize.sync({force: config.connection.force})

  // 寫入預設資料
  await bootstrap();

  //監聽的 port
  app.listen(config.port);
  return app;

}

liftApp();
