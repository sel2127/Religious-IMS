const express=require('express');
const router = express.Router();
const userController=require('../controllers/userController');
//define routes for user controller
router.use('/',userController);
module.exports=router;