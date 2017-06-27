import chai from 'chai'
chai.should();

// global.request = require("supertest");
// global.sinon = require("sinon");
global.app = null;
import liftApp from '../server/index.js'

before(async () => {
  let app = await liftApp();

  // console.log(123,global.rick)

  // global.app = app;
  // global.request = global.request.agent(app.listen());
  //
  // console.log("server start finish.");

  // done();

});
