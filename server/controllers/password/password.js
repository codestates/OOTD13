const modifyPassword = require("./../../modules/modifyPassword");
const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  const userInfo = validateToken(req.header.authorization);
  if (!userInfo) return res.status(401).send({ response: "not authorized" });
  if (userInfo && userInfo.password !== req.body.curPassword) {
    return res.status(401).send({ response: "not authorized" });
  }
  else {
  modifyPassword(userInfo.email, req.body.newPassword)
    .then(() => {
      res.status(200).send({ response: "ok" });
    })
    .catch((err) => {
      return err;
    });
}
