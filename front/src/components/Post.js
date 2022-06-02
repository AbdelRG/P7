import React from "react";
import ProfilePic from "../../public/assets/images/icon-left-font-monochrome-black.png";
import PostPic from "../../public/assets/images/icon-left-font-monochrome-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  return (
    <>
      <div className="postContainer">
        <div className="postUserInfo">
          <div className="profilePicContainer">
            <img
              className="profilePic"
              src={ProfilePic}
              alt="image de profil"
            />
          </div>
          <p className="userPseudo">Pseudonyme</p>
        </div>
        <div className="postContent">
          <h4 className="postTitle">Post title</h4>
          <p className="postText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <img className="postPic" src={PostPic} alt="image du post" />
        </div>
        <div className="postInfo">
          <FontAwesomeIcon className="postIcon" icon={faThumbsUp} />
          <FontAwesomeIcon className="postIcon" icon={faThumbsDown} />
          <FontAwesomeIcon className="postIcon" icon={faComments} />
        </div>
      </div>
    </>
  );
};

export default Post;
