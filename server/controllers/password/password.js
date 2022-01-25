const modifyPassword = require("./../../modules/modifyPassword");
const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  const userInfo = await validateToken.validateToken("0",req.headers.authorization);
  if (!userInfo) return res.status(401).send({ response: "not authorized" });
  if (userInfo && userInfo.password !== req.body.curPassword) {
    return res.status(401).send({ response: "not authorized" });
  } else {
    modifyPassword
      .modifyPassword(userInfo.email, req.body.newPassword)
      .then(() => {
        res.status(200).send({ response: "ok" });
      })
      .catch(() => {
        return res.status(401).send({ response: "not authorized" });
      });
  }
};
