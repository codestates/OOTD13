'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type:Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        }
      },
      image_src: {
        type: Sequelize.STRING,
        allowNull:false
      },
      like: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      view: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      content_id: {
        type:Sequelize.INTEGER,
        references:{
          model:'contents',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};