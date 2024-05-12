//this for how to store data must be store in database 
const mongoose=require('mongoose')
const todoSchema=new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})
module.exports=mongoose.model('ToDo',todoSchema)