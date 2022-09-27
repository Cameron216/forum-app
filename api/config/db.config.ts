const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST_NAME,
    dialect: 'mysql',
  }
);

module.exports = sequelize;
