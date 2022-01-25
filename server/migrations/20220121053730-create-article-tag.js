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
      },
      tag_id: {
        type:Sequelize.INTEGER,
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('article_tags');
  }
};