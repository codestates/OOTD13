const createUser = require("./../../modules/createUser");

module.exports = async (req, res) => {
  const { email, password, username } = req.body;
  await createUser.createUser({
    email: email,
    password: password,
    username: username,
  });
  return res.status(201).send({ response: "ok" });
};
