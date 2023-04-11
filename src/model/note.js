//make model of note in mongoose
//1. Define schema -> id,userid,title,content,date
//2. create model
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id:{type: String,unique:true,require:true},
    userid:{type: String,require:true},
    title:{type: String,require:true},
    content:{type: String},
    dateadded:{type: Date,default: Date.now},

});

module.exports = mongoose.model("Note",noteSchema);