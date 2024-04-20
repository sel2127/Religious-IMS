'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    static associate(models) {
      // Define association with the User model
      Donation.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
          references: {
            model: 'Users', // Name of the referenced table
            key: 'id' // Primary key of the referenced table
          },
          onUpdate: 'CASCADE', // Update user_id in Donations if the referenced user's id changes
          onDelete: 'CASCADE' // Delete donations associated with the deleted user
        }
      });
    }
  }
  
  Donation.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Name of the referenced table
        key: 'id' // Primary key of the referenced table
      },
      onUpdate: 'CASCADE', // Update user_id in Donations if the referenced user's id changes
      onDelete: 'CASCADE' // Delete donations associated with the deleted user
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    tx_ref: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Donation',
  });

  return Donation;
};
