const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  const validate = validateToken(
    req.query.loginMethod,
    req.header.authorization
  );
  if (!validate) res.status(401).send({ response: "not login" });
  res.status(200).send({ response: "ok" });
};