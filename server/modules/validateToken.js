const models = require("../models");
const { verify } = require("jsonwebtoken");
const requestUserInfoGit = require('./requestUserInfoGit')

module.exports = {
  validateToken: async (loginMethod, token) => {
    if(!token) return null;
    if (!loginMethod) {
      try {
        return verify(token, process.env.ACCESS_SECRET);
      } catch (err) {
        return err;
      }
    } else{
      const userInfo = requestUserInfoGit(token)
      if(!userInfo) return err;
      return {
        email:userInfo.login+'@github.com',
        username:userInfo.login,
        login_method:1
      }
    }
  },
};
