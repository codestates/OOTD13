const models = require("../models");

module.exports = {
  createUser: async (loginMethod, email, username, password) => {
    if (!loginMethod) {
      models.user.create({
        email: email,
        username: username,
        password: password,
        login_method: 0,
      });
    }
    models.user.create({
      email: email,
      login_method: loginMethod,
      username: username,
      password: null,
    });
  },
};