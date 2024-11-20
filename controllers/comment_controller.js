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
    console.log(commentId);
    try{
        const newComment = await commentModel.findByIdAndUpdate(
            commentId,
            req.body,
            {new:true}  
        );
        if (!newComment) {
            return res.status(404).send("Comment not found");
        }

        res.status(200).send(newComment);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    createComment,
    getAllComments,
    updateComment,
}