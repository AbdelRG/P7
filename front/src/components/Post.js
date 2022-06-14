import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import getUserById from "../apiCall/getUserById";
import React, { useEffect } from "react";
import React, { useState } from "react";

const Post = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserById(props.post.userId).then((res) => {
      setUser(res.user);
    });
  }, []);

  return (
    <>
      <div className="postContainer">
        <div className="postUserInfo">
          <div className="profilePicContainer">
            {user.imageUrl && (
              <img
                className="profilePic"
                src={user.imageUrl}
                alt="image de profil"
              />
            )}
          </div>
          <p className="userPseudo">{user.pseudo}</p>
        </div>
        <div className="postContent">
          <h4 className="postTitle">{props.post.title}</h4>
          <p className="postText">{props.post.text}</p>
          {props.post.imageUrl && (
            <img
              className="postPic"
              src={props.post.imageUrl}
              alt="image du post"
            />
          )}
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
