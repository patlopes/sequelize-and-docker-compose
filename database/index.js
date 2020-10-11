const { Sequelize } = require('sequelize');
require('dotenv').config()

const DATABSE = process.env.DB;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST

const sequelize = new Sequelize(DATABSE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

const modelDefiners = [
  require('./models/users.model')
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

sequelize.sync({force:false})
module.exports = sequelize;