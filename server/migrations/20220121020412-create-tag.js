'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tags', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull:false
      },
      tag_name: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tags');
  }
};