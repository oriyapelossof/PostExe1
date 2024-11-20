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
    try{
      const posts = await postModel.find();
      res.status(200).send(posts);
    }catch(error){
      res.status(400).send(error.message);
    }

};

const getPostBySenderId = async (req,res) => {
    const {senderId} = req.query;
    try{
      const postsById = await postModel.find({senderId: senderId});
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
}

  module.exports = {
    createPost,
    getAllPosts,
    getPostBySenderId,
};