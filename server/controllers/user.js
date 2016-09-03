exports.index = async function () {
  let users = await models.User.findAll()

   this.body = {users}
}

exports.get =  async function () {

  let userId = this.params.id;

  let user = await models.User.find({
    where: {
      id: userId
    }
  });

  this.body = {user}
};


exports.create =  async function () {

  let newUser = this.request.body;

  let result = null;

  try {
    result = await models.User.create(newUser);
  } catch (e) {
    console.error("create user error", e);
  }

  let user = result;

  this.body = {user}
};


exports.delete = async function () {

  let userId = this.params.id;

  let result = null;

  try {
    let user = await models.User.findById(userId);
    result = user.destroy()
  } catch (e) {
    console.error("delete user error", e);
  }

  this.body = {result}
};
