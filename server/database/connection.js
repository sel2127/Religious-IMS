const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('capstone', 'root', 'null', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
