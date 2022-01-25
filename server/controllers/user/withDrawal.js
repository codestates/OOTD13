const deleteUser = require("./../../modules/deleteUser");
const validateToken = require("./../../modules/validateToken");
const models = require("./../../models");

module.exports = async (req, res) => {
  const userInfo = await validateToken.validateToken(
    req.query.loginmethod,
    req.headers.authorization
  );
  if (!userInfo) return res.status(401).send({ response: "not authorized1" });
  deleteUser
    .deleteUserPost(userInfo.email, req.query.loginmethod)
    // .then(()=>{
    //   deleteUser.deleteUser(userInfo.email, req.query.loginmethod)
    // })
    .then(() => {
      res.status(204).send({ response: "deleted" });
    })
    .catch(async () => {
      // try {
      //   const userId = await models.user.findOne({
      //     where: { email: userInfo.email, login_method: req.query.loginmethod },
      //   });
      //   await models.user.destroy({ where: { id: userId.id } });
      //   return res.status(204).send({ response: "deleted" });
      // } catch {
        return res.status(401).send({ response: "not authorized2" });
      //}
    });
};
