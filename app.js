const express = require("express"); //import express module
const app = express();
const dotenv = require("dotenv").config(); //import dotenv module
const mongoose = require("mongoose"); //import mongoose module
const port = process.env.port;

mongoose.connect(process.env.db_connection);
const db = mongoose.connection;
db.on('error', (error)=>{console.log(error)});
db.once('open',()=>{console.log("connected to mongo database")});


app.get("/",(req,res)=>{
    res.send("Welcome to our project");
});


app.listen(port, ()=>{
    console.log("server is running: htpp://locaclhost:"+port);
})

