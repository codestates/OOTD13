'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles', [
      {
        user_id:1,
        image_src:'',
        like:'100',
        view:'1231312',
        content_id:1
      },
      {
        user_id:1,
        image_src:'',
        like:'10120',
        view:'12312312',
        content_id:2
      },
      {
        user_id:1,
        image_src:'',
        like:'10120',
        view:'123123112',
        content_id:3
      },
      {
        user_id:1,
        image_src:'',
        like:'100222',
        view:'121112312',
        content_id:4
      },
      {
        user_id:1,
        image_src:'',
        like:'10011',
        view:'12333312',
        content_id:5
      },
      {
        user_id:1,
        image_src:'',
        like:'1765',
        view:'2312',
        content_id:6
      },
      {
        user_id:1,
        image_src:'',
        like:'100543',
        view:'12312',
        content_id:7
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {});
  }
};
