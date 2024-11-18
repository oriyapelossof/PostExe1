const postModel=require("../models/post_model");
const { json } = require("body-parser");



const createPost = async (req, res) => {
    const post=req.body; //returns an object
    try{
      const newPost= await postModel.create(post);
      res.status(201).send(newPost);
    }catch(error){
      res.status(400).send(error);
    }
  };

  const getPostById = async (req, res) => {
    const postId=req.params.id;//this is from express- knows how to take the id from the url
    try{
      const post=await postModel.findById(postId);
      res.status(200).send(post);
    }catch(error){
      res.status(400).send(error.message);
    }
  };


  module.exports = {
    createPost,
    getPostById

  };