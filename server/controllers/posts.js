import Post from '../Models/Post.js';
import User from '../Models/User.js';

export const createPost = async (req,res) => {
    try {
        const { userId,desc,picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            nick: user.nick,
            desc,
            userPicture: user.picture,
            picturePath,
            likes: {},
            comments : []
        })
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post); 
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getFeedPosts = async (req,res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post); 
    } catch (error) {
        res.status(404).json({message: error.message})

    }
}

export const getUserPosts = async (req,res) => {
    try {
        const { userId } = req.params
        const post = await Post.find(userId);
        res.status(200).json(post); 
    } catch (error) {
        res.status(404).json({message: error.message})

    }
}

export const likePost = async (req,res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const uptadetPost = await Post.findById(
            id,
            {likes:post.likes},
            { new : true }
        )

        res.status(200).json(uptadetPost); 
    } catch (error) {
        res.status(404).json({message: error.message})

    }
}