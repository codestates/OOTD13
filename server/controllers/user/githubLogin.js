const createUser = require("./../../modules/createUser");
const requestTokenGit = require("./../../modules/requestTokenGit");
const requestUserInfoGit = require("./../../modules/requestUserInfoGit");
const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  const token = await requestTokenGit(req.body.authorizationCode);
  const gitUserInfo = await requestUserInfoGit(token);
  const userInfo = await findUser({ email: gitUserInfo.email });
  if (!token) {
    return res.status(401).send({ response: "invalid code" });
  }
  if (!userInfo) {
    await createUser({
      loginMethod: 1,
      email: (await gitUserInfo).email,
      username: (await gitUserInfo).username,
    });
    return res.status(201).send({
      response: "created",
      data: {
        userInfo: {
          email: userInfo.email,
          username: userInfo.username,
          createdAt: userInfo.createdAt,
          loginMethod: userInfo.login_method,
        },
      },
    });
  }
  return res.status(200).send({
    response: "ok",
    data: {
      email: userInfo.email,
      username: userInfo.username,
      createdAt: userInfo.createdAt,
      loginMethod: userInfo.login_method,
    },
  });
};
