import { Sequelize } from "sequelize";

const db = new Sequelize('capstone', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Check database connection
db.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;
