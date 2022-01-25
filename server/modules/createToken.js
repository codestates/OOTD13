<<<<<<< HEAD
const models = require("../models");
const { sign } = require("jsonwebtoken");
const jwt = require('jsonwebtoken')
=======
const jwt = require("jsonwebtoken");
require('dotenv').config();
>>>>>>> 96e5adae0bcd019338f506bb2cadef8833e9aa9e

module.exports = {
  createToken: async (userInfo) => {
    const { email, username, password, login_method, createdAt } = userInfo;
    const data = {
      email,
      username,
      password,
      login_method,
      createdAt,
    };
    const accessToken = jwt.sign(data, process.env.ACCESS_SECRET, {
      expiresIn: "1d",
    });
    console.log(accessToken)
    return accessToken;
  },
};
