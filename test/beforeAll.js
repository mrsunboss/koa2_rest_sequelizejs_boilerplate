import chai from 'chai'
import supertest from 'supertest'
import liftApp from '../server/index.js'

global.request = supertest
global.app = null;

chai.should();
before(async () => {
  let app = await liftApp();

  global.app = app;
  global.request = global.request.agent(app.listen());

});
