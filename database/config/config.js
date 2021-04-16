// require('dotenv').config();

// module.exports =
// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }


require('dotenv').config()
const motor = process.env.motor_bd || 'postgres';
const url_dev = process.env.DEV_DATABASE_URL || '';
const url_test = process.env.TEST_DATABASE_URL || '';
const url_prod = process.env.DATABASE_URL || '';

module.exports = {
  development: {
    url: url_dev,
    dialect: motor,
  },
  test: {
    url: url_test,
    dialect: motor,
  },
  production: {
    url: url_prod,
    dialect: motor,
  },
}