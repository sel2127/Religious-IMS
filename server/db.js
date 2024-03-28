const {Sequelize} = require ("sequelize");

const sequelize = new Sequelize ("capstone" , "root", null ,

{
    host:"localhost",
    dialect:"mysql",
    dialectModule: require("mysql2")
});

module.exports = sequelize;