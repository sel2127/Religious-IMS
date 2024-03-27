const {Sequelize, DataTypes} = require ("sequelize");

module.exports = function (sequelize){

  const User = sequelize.define(

    "user",
    {

      firstname: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true

      },
      lastname: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true

      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true

      },

      password: {
        type: DataTypes.STRING,
        allowNull:false,
      }

    },
    {
      timestamps:true
    }
  );

return User;
  };
