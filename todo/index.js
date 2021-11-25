const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const app = express()
const port = 3000

app.use(cors())


const url = "mongodb://localhost/mydatabase"

// var hbs = require('express-hbs')


var Schema = mongoose.Schema

// var TodoModelSchema = new Schema({
//     task:{
//         type:String,
//         required:true
//     },
//     complete:{
//         type:Boolean,
//         required:true
//     }
//   });


mongoose.connect(url,{useNewUrlParser:true})
mongoose.connection
.once('open',()=>{
    console.log('Connected');
})
.on('error',error=>{
    console.log("Error",error);
})

const Todo = mongoose.model('Todo', { name: String,completed:Boolean });
// const task = new Todo({ name: 'task2',completed:false });
// task.save().then(() => console.log('Added'));

app.get('/',(req,res)=>{
    res.send("Hello World!")
})
app.get('/todos',(req,res)=>{
    // todos = Todo.find({})
    // console.log(todos);
    Todo.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
})

app.listen(port,()=>{
    console.log(`App running on ${port}`);
})