//Importing required packages
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

//Routes
router.get('/:id', fileController.getDetails);
router.post('/upload', fileController.uploadFile);

//Exporting router
module.exports = router;