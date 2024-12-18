const commentModel = require("../models/comment_model");
const { json } = require("body-parser");
const { post } = require("../routes/post_route");

const createComment = async (req, res) => {
    const {owner, content , postId} = req.body;  
    try{
        const newComment = await commentModel.create({owner, content, postId});
        res.status(201).send(newComment);
    }catch(error){
        res.status(400).send(error.message);
    }
};

const deleteComment = async (req, res) => {
    const commentId=req.params.id;
    try{
      const deleteComment=await commentModel.findByIdAndDelete(commentId);
      res.status(200).send(commentId);
    }catch(error){
      res.status(400).send(error.message);
    }
};

const getAllComments = async (req, res) => {
    try{
      const comments = await commentModel.find();
      res.status(200).send(comments);
    }catch(error){
      res.status(400).send(error.message);
    }
};

const updateComment = async (req,res) =>{
    const commentId = req.params.id;
    try{
        const newComment = await commentModel.findByIdAndUpdate(
            commentId,
            req.body,
            {new:true}  
        );

        res.status(200).send(newComment);
    }catch(error){
        res.status(400).send(error.message);
    }
};

module.exports = {
    createComment,
    deleteComment,
    getAllComments,
    updateComment,
}