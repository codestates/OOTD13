const models = require("../models");

module.exports = {
  deleteUser: async (email, loginmethod) => {
    const userInfo = await models.user.findOne({
      where: { email: email, login_method: loginmethod },
    });
    await models.user.destroy({ where: { id: userInfo.id } });
    await models.article.destroy({ where: { user_id: userInfo.id } });
  },
};
