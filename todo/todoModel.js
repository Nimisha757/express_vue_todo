const mongoose = require('mongoose')
var Schema = mongoose.Schema
var TodoModelSchema = new Schema({
    task:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        required:true
    }
  });
module.exports = mongoose.model('Todo',TodoModelSchema)