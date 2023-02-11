import React from 'react'
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../../datas/Posts";
import WidgetWrapper from "../../WidgetWrapper/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../states";
import { useTheme } from '@mui/material'

const Post = ({post, postId,postUserId,name,description,nick,picturePath,userPicturePath,likes,comments}) => {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
  
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }
    const [isComments, setIsComments] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLikeds = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;
  
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
  
    const patchLike = async () => {
      const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
    };


    return (
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              {/* <img
                className="postProfileImg"
                src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                alt=""
              /> */}
              <img
                className='postProfileImg'
                width="100%"
                height="auto"
                alt="post"
                style={{ borderRadius:'0.75rem', marginTop:'0.75rem'}}
                src={`http://localhost:3001/assets/${picturePath}`}
                />
              <span className="postUsername">
                {Users.filter((u) => u.id === post?.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
              <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Post