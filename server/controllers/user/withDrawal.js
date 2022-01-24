const deleteUser = require("./../../modules/deleteUser");
const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  const userInfo = validateToken(
    req.query.loginMethod,
    req.header.authorization
  );
  if (!userInfo) return res.status(401).send({ response: "not authorized" });
  deleteUser(userInfo.userId).then(() => {
    res.status(204).send({ response: "deleted" });
  });
};
