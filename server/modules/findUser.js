const models = require("../models");

module.exports = async ({ loginMethod, email, password, username }) => {
  let params = {};
  if (loginMethod) params.loginMethod=loginMethod;
  if (email) params.email = email;
  if (password) params.password = password;
  if (username) params.username = username;
  try {
    const userInfo=await models.user.findOne({ where: params });
    return userInfo;
  } catch {
    return false;
  }
}