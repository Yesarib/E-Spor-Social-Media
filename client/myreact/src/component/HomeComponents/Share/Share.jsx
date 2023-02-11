import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../states";
import { InputBase, useTheme, Button } from "@mui/material";
import UserImage from "../../UserImage/UserImage";
import WidgetWrapper from "../../WidgetWrapper/WidgetWrapper";

const Share = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <WidgetWrapper>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <UserImage image={picturePath} />
            <InputBase
              placeholder="What's on your mind..."
              onChange={(e) => setPost(e.target.value)}
              value={post}
              sx={{
                width: "100%",
                backgroundColor: palette.neutral.light,
                borderRadius: "2rem",
                padding: "1rem 2rem",
              }}
            />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
            </div>
            <Button
              className="shareButton btn btn-succss"
              style={{ width: "100px" }}
              type="submit"
              sx={{
                m: "0rem 0",
                p: "0.5rem",
                backgroundColor: "rgb(139, 58, 58)",
                color: palette.background.alt,
                "&:hover": { color: "black" },
              }}
            >
              Share
            </Button>
            {/* <button className="shareButton btn btn-success">Share</button> */}
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Share;
