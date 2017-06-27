import {expect,should} from 'chai'
describe('TestCase1', ()=> {
  it("should work",(done) => {

    request.get("/user/1")
    .expect(200)
    .end((error, res) => {
      res.body.user.should.have.property('name')

      expect(res.body.user).to.exist
      done();
    });

  });
});
