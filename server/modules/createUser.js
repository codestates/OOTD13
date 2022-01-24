const models = require("../models");

module.exports = {
  createUser: (loginMethod, email, username, password) => {
    if (!loginMethod) {
      models.user.create({
        email: email,
        username: username,
        password: password,
      });
    }
    models.user.create({
      email: email,
      login_method: loginMethod,
      username: username,
    });
  },
};