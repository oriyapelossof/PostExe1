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

  const getAllPosts = async (req, res) => {
    const  senderFilter = req.query.sender;
    try{
      const posts = await postModel.find();
      res.status(200).send(posts);
    }catch(error){
      res.status(400).send(error.message);
    }

  };


  module.exports = {
    createPost,
    getAllPosts,
  };