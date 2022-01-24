const axios = require("axios");
require("dotenv").config();

module.exports = async (accessToken) => {
  const url = "https://api.github.com/user";
  const getUserInfo = await axios.get(url, {
    headers: { authorization: `token ${accessToken}` },
  });
  return getUserInfo.data;
};
