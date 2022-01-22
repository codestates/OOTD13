const models = require("../models");

module.exports = {
  findUser: async (email) => {
    return models.user.findOne({
      where: { email: email },
    });
  },
  passwordConfirm: async (findUser, password) => {
    const dbPassword = findUser.password;
    if (password === dbPassword) {
      return true;
    }
    return false;
  },
  emailConfirm: async (findUser, email) => {
    const deEmail = findUser.email;
    if (email === dbEmail) {
      return true;
    }
    return false;
  },
  usernameConfirm: async (findUser, username) => {
    const dbUsername = findUser.username;
    if (username === dbUsername) {
      return true;
    }
    return false;
  },
  modifyPassword: async (userId, password) => {
    await models.user.update({ password: password }, { where: { id: userId } });
  },
};
