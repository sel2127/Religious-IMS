import { Sequelize } from "sequelize";

const db = new Sequelize('capstone', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test the database connection
async function testDatabaseConnection() {
    try {
        await db.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default db;
export { testDatabaseConnection };
