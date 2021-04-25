require('dotenv').config();

module.exports =
{
  "development": {
    "username": "sa",
    "password": '1234',
    "database": "juris_dev",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": '5433'
  },
  "test": {
    "username": "root",
    "password": '1234',
    "database": "juris_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": '5433'
  },
  "production": {
    "username": "root",
    "password": '1234',
    "database": "juris",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": '5433'
  }
}