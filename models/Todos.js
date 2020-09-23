const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create todo Schema
const todoSchema = new Schema({
    content : {
        type:String,
        required:true,
        unique:true,
    },
    isComplete : {
        type:Boolean,
        default:false
    }
});

module.exports = Todos = mongoose.model('Todos',todoSchema)


