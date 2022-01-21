'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shirts: {
        type: Sequelize.STRING,
        defaultValue:''
      },
      pants: {
        type: Sequelize.STRING,
        defaultValue:''
      },
      acc: {
        type: Sequelize.STRING,
        defaultValue:''
      },
      outer: {
        type: Sequelize.STRING,
        defaultValue:''
      },
      shoes: {
        type: Sequelize.STRING,
        defaultValue:''
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contents');
  }
};