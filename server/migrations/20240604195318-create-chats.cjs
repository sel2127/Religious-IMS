'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('Chats', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users', // Ensure the table name is correct
            key: 'id',      // Ensure the column name is correct
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        adminId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Admins', // Ensure the table name is correct
            key: 'id',       // Ensure the column name is correct
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sender: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      });
    } catch (error) {
      console.error('Error creating Chats table:', error);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('Chats');
    } catch (error) {
      console.error('Error dropping Chats table:', error);
      throw error;
    }
  },
};
