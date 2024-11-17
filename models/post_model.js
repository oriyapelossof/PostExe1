const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const postSchema=new Schema({
    title:{
        type:String,
        required: true,
    },
    content:String,
    
    owner:{
        type: String,
        required: true,
    },

    date:{
        type: Date,
        default: Date.now,
    }
});

const postModel=mongoose.model("Posts",postSchema);
module.exports=postModel;