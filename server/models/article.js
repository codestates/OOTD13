'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.belongsTo(models.user,{
        foreignKey:'user_id',
        sourceKey:'id'
      })
      article.hasMany(models.article_tag,{
        foreignKey:'article_id',
        sourceKey:'id'
      })
      article.belongsTo(models.content,{
        foreignKey:'content_id',
        sourceKey:'id'
      })
    }
  }
  article.init({
    image_src: DataTypes.STRING,
    like: DataTypes.INTEGER,
    view: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};