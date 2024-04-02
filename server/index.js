import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import AdminListRoute from "./routes/AdminListRoute.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


dotenv.config();

const app = express();

// (async() => {
//     await db.sync();
// })();


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
  

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    methods : ['POST' , 'GET' ],
}));

app.use(express.json());

//Start the server
const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server up and running...on port ${port}`);
});

app.use('/admin',AdminListRoute);
app.use('/user', UserRoute);

app.get('/', (req, res) => {
    res.send('Hello, world! This is the root path.');
});

app.use((req, res) => {
    res.status(404).send("Not Found");
})
    