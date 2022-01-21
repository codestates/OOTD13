'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('article_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      article_id: {
        type:Sequelize.INTEGER,
        references:{
          model:'articles',
          key:'id'
        }
      },
      tag_id: {
        type:Sequelize.INTEGER,
        references: {
          model:'tags',
          key:'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('article_tags');
  }
};