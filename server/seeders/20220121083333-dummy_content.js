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
        shirts: 'WHO.A.U ?????? ?????? 39,900?????? ??????',
        pants:'?????? ?????? ????????? ????????? 49,900???',
        acc:'??????????????? ?????? ?????????',
        outer:'',
        shoes:'?????? ???????????? ????????? ???????????? 79,900??? ?????? ??????????????? ??????'
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
