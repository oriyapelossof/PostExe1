const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const commentSchema=new Schema({
    title:{
        type:String,
        required: true,
    },
    content:String,
    
    owner:{
        type: String,
        require: true,
    },

    postId:{
        type: mongoose.Sechema.Types.ObjectId, ref:"Posts",
    },

    date:{
        type: Date,
        default: Date.now,
        require: true,
    }
})

const commentModel=mongoose.model("Comments",commentSchema);
module.exports=commentModel;