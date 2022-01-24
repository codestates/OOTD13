const createToken = require("./../../modules/createToken");
const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await findUser({ email:email });
  if (email === userInfo.email && password === userInfo.password) {
    return res.status(200).json({
      data: {
        accessToken: createToken.createToken(userInfo),
        userInfo: {
          email: userInfo.email,
          username: userInfo.username,
          createdAt: userInfo.createdAt,
          loginMethod: userInfo.login_method,
        },
      },
    });
  }
  return res.status(404).send({response: "login err" });
};
