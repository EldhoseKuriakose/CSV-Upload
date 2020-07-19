//Importing required packages
const express = require('express');
const router = express.Router();
const File = require('../models/file');

//Home route
router.get('/', async (req, res) => {
    try {
        let lists = await File.find({}).sort('-createdAt');
        //Throwing error if file not found 
        if(lists.length == 0){
            throw new Error('No Uploaded files found');
        }
        //Success Response
        res.render('home', {fileLists: lists});
    } catch (err) {
        console.log("Internal error in getting files" + err);
        res.render('home', {error: err.message});
    }
});

//File route
router.use('/file', require('./file'));
//Exporting router
module.exports = router;