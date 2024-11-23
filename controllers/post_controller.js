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

const getAllPosts = async (req, res) => {
    try{
      const posts = await postModel.find();
      res.status(200).send(posts);
    }catch(error){
      res.status(400).send(error.message);
    }

};

const getPostBySenderId = async (req,res) => {
    const sender = req.query.senderId;
    try{
      const postsById = await postModel.find({senderId:sender});
      if(postsById.length==0)
      {
        res.status(400).send("No posts found for the given sender ID");
      }else{
        res.status(200).send(postsById);
      }
    }
    catch(error){
      res.status(400).send(error.message);
    }
};

const updatePost = async (req,res) =>{
  const postId = req.params.id;
  try{
      const newPost = await postModel.findByIdAndUpdate(
          postId,
          req.body,
          {new:true}  
      );

      res.status(200).send(newPost);
  }catch(error){
      res.status(400).send(error.message);
  }
};

  module.exports = {
    createPost,
    getAllPosts,
    getPostBySenderId,
    getPostById,
    updatePost,
};
