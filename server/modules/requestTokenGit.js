const axios = require("axios");
const clientId = process.env.GITHUB_CLIENT_ID;
const ClientSecret = process.env.GITHUB_CLIENT_SECRET;
require("dotenv").config();

module.exports = {
  requestTokenGit: async (req, res) => {
    const url = "https://github.com/login/oauth/access_token";
    const param = {
      client_id: clientId,
      client_secret: ClientSecret,
      code: req.body.authorizationCode,
    };
    await axios
      .post(url, param, { headers: { Accept: "application/json" } })
      .then((result) => {
        const body = result.data.access_token;
      });
  },
};
