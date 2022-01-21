'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('article_tags', [
      {
        article_id:1,
        tag_id:1
      },
      {
        article_id:1,
        tag_id:5
      },
      {
        article_id:1,
        tag_id:7
      },
      {
        article_id:1,
        tag_id:9
      },
      {
        article_id:2,
        tag_id:2
      },
      {
        article_id:3,
        tag_id:13
      },
      {
        article_id:5,
        tag_id:10
      },
      {
        article_id:5,
        tag_id:7
      },
      {
        article_id:6,
        tag_id:5
      },
      {
        article_id:6,
        tag_id:8
      },
      {
        article_id:6,
        tag_id:11
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('article_tags', null, {});
  }
};
