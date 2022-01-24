const models = require("../models");
const { verify } = require("jsonwebtoken");

module.exports = {
  validateToken: (loginMethod, token) => {
    if (loginMethod) {
      try {
        return verify(token, process.env.ACCESS_SECRET);
      } catch (err) {
        return err;
      }
    }
  },
};
