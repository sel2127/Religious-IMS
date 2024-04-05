import { Sequelize } from "sequelize";

const db = new Sequelize('capstone', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
//database connection
(async () =>{
    try{
      await db.authenticate();
      console.log("Connection to the database has been established successfully");
      await db.sync({alter:true}); //Synchronize models with database
      console.log('Models synchronnized with database.');
    }
    catch (error){
      console.error('Unable to connect to the database:' , error);
    }
    })
  ();
export default db;