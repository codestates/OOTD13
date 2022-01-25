const deleteUser = require("./../../modules/deleteUser");
const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  const userInfo = await validateToken.validateToken(
    req.query.loginmethod,
    req.headers.authorization
  );
  if (!userInfo) return res.status(401).send({ response: "not authorized" });
  deleteUser
    .deleteUser(userInfo.email, req.query.loginmethod)
    .then(() => {
      res.status(204).send({ response: "deleted" });
    })
    .catch(() => {
      return res.status(401).send({ response: "not authorized" });
    });
};
