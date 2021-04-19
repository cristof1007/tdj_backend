require('dotenv').config();

module.exports =
{
  "development": {
    "username": "sa",
    "password": '5433',
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "juris_dev"
  },
  "test": {
    "username": "root",
    "password": '5433',
    "database": "juris_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": '5433',
    "database": "juris",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}