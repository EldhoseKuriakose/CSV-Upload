//Importing required files and packages
const mongoose = require('mongoose');

//File Schema
const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    originalFileName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, { timestamps: true });

//Uploads File Path
fileSchema.statics.uploadPath = '/csv_uploads';

//Exporting Model
module.exports = mongoose.model('File', fileSchema);
