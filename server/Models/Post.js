import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required:true,
        },
        nick:{
            type: String,
            required:true,
        },
        desc : String,
        picturePath : String,
        userPicture : String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments : {
            type : Array,
            default: []
        }
    },
    {timestamps:true}
);

const Post = mongoose.model('Post',PostSchema);
export default Post;