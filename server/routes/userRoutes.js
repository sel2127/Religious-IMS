const express = require('express');
const mysql = require('mysql'); 
const bodyParser = require('body-parser');
const bcrypt = require('./utils/bcrypt'); // Import bcrypt utility

const app = express();