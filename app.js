const express = require('express');
const mongoose=require('mongoose')
const bodyparser= require('body-parser')

// const employeeRoutes = require('./api/routes/employees');
const employeerRoutes = require('./Routes/employeerouter');
const bodyParser = require('body-parser');

 var cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://Roshan:Roshan786@cluster0.eoiy197.mongodb.net/?retryWrites=true&w=majority')
 app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin' , '*');
    res.header('Access-Control-Allow-Header' ,'Origin, X-Requested-With ,Content-Type,Accept,Autherization');
    if(req.method == 'Options'){
        res.header('Access-Control-Allow-Origin' , 'PUT,POST,GET,DELETE,PATCH');
        return res.status(200).json({});
    }
next();
 });
 app.use(cors());
// Routes which should handle requests
// app.use('/employees', employeeRoutes);
app.use(bodyparser.urlencoded({extended: false})); //middleware of parsing bodies from URL
app.use(bodyparser.json());
app.use('/employeer', employeerRoutes);


module.exports = app;