'use strict';

export default async (cb) => {


  let User = {
    name:'rick2'
  }


  try {
    let createdVisitor = await models.User.create(User);


  } catch (e) {

    console.log("error", e);

  }
}
