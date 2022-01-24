const models = require("../models");

module.exports = {
  findUser: ({ loginMethod, email, password, username }) => {
    let parm = {};
    if (loginMethod && email) {
      models.user.findOne({
        where: { login_method: loginMethod, email: email },
      });
    }
    if (email) parm.email = email;
    if (password) parm.password = password;
    if (username) parm.username = username;
    models.user.findOne({ where: parm });
  },
};
