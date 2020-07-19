//Importing required files and packages
const mongoose = require('mongoose');

//To fix all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//Connecting to database
mongoose.connect('mongodb://localhost/csv-upload');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log("Connected to Database:: MongoDB");
});

//Exporting db
module.exports = db;