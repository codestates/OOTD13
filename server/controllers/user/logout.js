const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  const validate = await validateToken.validateToken(
    req.query.loginMethod,
    req.header.authorization
  );
  if (!validate) return res.status(401).send({ response: "not login" });
  return res.status(200).send({ response: "ok" });
};