const models = require("../models");

module.exports = async (data) => {
  let params = {};
  if (data.loginMethod) params.login_method = data.loginMethod;
  if (data.email) params.email = data.email;
  if (data.password) params.password = data.password;
  if (data.username) params.username = data.username;
  try {
    const userInfo = await models.user.findOne({ where: params });
    return userInfo;
  } catch {
    return false;
  }
};
