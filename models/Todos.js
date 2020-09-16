const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create todo Schema
const todoSchema = new Schema({
    todo : {
        type:String,
        required:true,
        unique:true,
    }
});

module.exports = Todos = mongoose.model('Todos',todoSchema)


