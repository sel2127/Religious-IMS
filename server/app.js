const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const eventRoutes = require('./routes/eventRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const sequelize = require('./db');
const user = require('./models/user')(sequelize); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Other middleware and configurations

const app = express();


app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.use(express.json());
app.use('/api/events', eventRoutes); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
// Initialize multer with the configured storage
const upload = multer({ storage: storage });
// Mount the eventUploadRouter at the '/api/events' endpoint
app.use('/api/events', eventUploadRouter);

// Test route for accessing the backend on the browser
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

//
(async () =>{
  try{
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully");
    await sequelize.sync({alter:true}); //Synchronize models with database
    console.log('Models synchronnized with database.');
  }
  catch (error){
    console.error('Unable to connect to the database:' , error);
  }
  })
();
// Admin Authentication
app.use('/api/admin/auth', adminAuthRoutes);


//User Registration
app.post('/api/register', async (req, res) => {
  try {
      const { firstname, lastname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password , 10);

       const User = await user.create({ firstname, lastname, email, password:hashedPassword });
       res.status(201).json({ message: 'User registered successfully!' , User });
      } catch (error) {
        console.error("Error registering user:",error);
        res.status(500).json({message : 'Server error'});
      }
    });



    //User Login
    app.post("/api/login" , async ( req, res) => {
      try{
        const {email, password} = req.body;
        const User = await user.findOne({ where : { email} });
        if(!User){
          return res.status(400).json({ message: "Invalid Credentials" });
        }
        const isPasswordMatch = await bcrypt.compare(password , User.password);
        if (!isPasswordMatch) {
          return res.status(400).json({ message: "Invalid Credentials"});
        }

        // Generate a JWT token with the user's ID and role
  // const token = jwt.sign({ userId: user.id, role: user.role }, 'your_secret_key');


        const token = jwt.sign({userId : User.id} ,"6617171" ,{
          expiresIn:"1h"
        });
        res.json({ token });
        
  // Set the token as an HTTP-only cookie
  res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful' });
      }
      catch (error){
        console.error ("Error logging in:" , error);
        res.status(500).json({ message: "Server Error"});
      }
    });

    

    //Middleware to verify the JWT token 
    function verifyToken(req,res,next){
const token = req.header("Authorization");
if(!token){
  return res.status(401).json({message : "Access Denied"});
}
try{
  const decoded = jwt.verify(
    token.split(" ")[1],
    '6617171'
  );
  req.user = decoded;
  next();
}
catch (error) {
  console.error("Error verifying token" , error);
  res.status(401).json ({message: "Invalid Token"});
}
}

//Protected route to get user info 
app.get('/userinfo' , verifyToken , async(req,res) => {
  try{
    const User = await user.findByPk(req.user.userId);
    if(!User){
      return res.status(404).json({ message : "User not found "});  
      }
      res.json({ User });
    }
    catch(error){
      console.error ("Error fetching user info:" , error);
      res.status(500).json({message : "Server Error"});
    }
});
    //Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

