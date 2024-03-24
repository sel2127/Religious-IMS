
// const { Sequelize, DataTypes } = require('sequelize');



// // Set up Sequelize
// const sequelize = new Sequelize('capstone', 'root', null, {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//   });
  
//   // Define User model
//   const User = sequelize.define('User', {
//     firstname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
  
//   app.use(express.urlencoded({ extended: true }));
  
//   app.post('/register', async (req, res) => {
//     const { firstname, lastname, email, password } = req.body;
//     try {
//       await User.create({ firstname, lastname, email, password });
//       res.send('User registered successfully!');
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('An error occurred during registration.');
//     }
//   });
  
//   // Sync the Sequelize models with the database
//   sequelize.sync().then(() => {
//     console.log('Database and tables synced');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   }).catch((err) => {
//     console.error('Unable to sync database:', err);
//   });