//Importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const db = require('./config/mongoose');
const multer = require('multer');
const port = process.env.port || 8000;

const app = express();

//Setting up the view Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'assets')));

//use express router
app.use('/', require('./routes/index'));

//Starting the server
app.listen(port, function(err){
    if(err){
        console.log(`Error:, ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});