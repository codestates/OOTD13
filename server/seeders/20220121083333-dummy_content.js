'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contents', [
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },

      {
        shirts: 'gucci',
        pants:'disel',
        acc:'chanel',
        outer:'louisvuitton',
        shoes:'shoopen'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contents', null, {});
  }
};
