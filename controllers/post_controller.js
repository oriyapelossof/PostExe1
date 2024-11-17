const postModel=require("../models/post_model");
const { json } = require("body-parser");



const createPost = async (req, res) => {
    console.log("I'm here!!!");
    const post=req.body; //returns an object
    try{
      const newPost= await postModel.create(post);
      res.status(201).send(newPost);
    }catch(error){
      res.status(400).send(error);
    }
  };


  module.exports = {
    createPost,
  };