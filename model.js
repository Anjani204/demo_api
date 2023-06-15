const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id:{
        required:true,
        type:Number
    },
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    year:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)