require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: 'localhost',
    dialect: 'mysql'
  },
  production: {
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'ootd13',
    host: 'ootd13-db.cjrpukcenao9.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    port:'13306'
  }
};