const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const commentSchema=new Schema({
    content:String,
    
    owner:{
        type: String,
        required: true,
    },

    postId:{
        type: mongoose.Schema.Types.ObjectId, ref:"Posts",
    },

    date:{
        type: Date,
        default: Date.now,
        require: true,
    }
})

const commentModel=mongoose.model("Comments",commentSchema);
module.exports=commentModel;