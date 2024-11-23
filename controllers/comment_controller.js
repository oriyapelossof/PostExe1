const commentModel = require("../models/comment_model");
const { json } = require("body-parser");
const { post } = require("../routes/post_route");

const createComment = async (req, res) => {
    const {title, owner, content , postId} = req.body;  
    try{
        const newComment = await commentModel.create({title, owner, content, postId});
        res.status(201).send(newComment);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteComment = async (req, res) => {
    const commentId=req.params.id;
    try{
      const deleteComment=await commentModel.findByIdAndDelete(commentId);
      res.status(200).send(commentId);
    }catch(error){
      res.status(400).send(error.message);
    }
};

module.exports = {
    createComment,
    deleteComment,
}