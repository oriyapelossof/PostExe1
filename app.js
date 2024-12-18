const express = require("express"); //import express module
const app = express();
const dotenv = require("dotenv").config(); //import dotenv module
const mongoose = require("mongoose"); //import mongoose module
const port = process.env.port;

mongoose.connect(process.env.db_connection);
const db = mongoose.connection;
db.on('error', (error)=>{console.log(error)});
db.once('open',()=>{console.log("connected to mongo database")});

const bodyParser=require("body-parser");
app.use(bodyParser.json());//turns into object
app.use(bodyParser.urlencoded({extended:true}));//takes url and takes the parameter

//connect the routes of posts to the app.js
const postRoutes = require("./routes/post_route");
app.use("/posts", postRoutes);

//connect the routes of comments to the app.js
const commentRoutes = require("./routes/comment_route");
app.use("/comments", commentRoutes);

app.listen(port, ()=>{
    console.log("server is running: htpp://locaclhost:"+port);
})

