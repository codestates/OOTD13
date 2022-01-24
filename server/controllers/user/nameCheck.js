const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  const userInfo = findUser(req.body.username);
  if (userInfo) {
    return res.status(409).send({ response: "used email" });
  }
  return res.status(200).send({ response: "available" });
};
