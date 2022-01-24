const models = require("../models");

module.exports = {
  deleteUser: async (userId) => {
    await models.user.destroy({ where: { id: userId } });
    await models.post.destroy({ where: { user_id: userId } });
  },
};
