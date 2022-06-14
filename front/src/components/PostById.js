import React from "react";
import getUserById from "../apiCall/getUserById";
import React, { useEffect } from "react";
import React, { useState } from "react";

import profilPic from "../../public/assets/images/icon-left-font-monochrome-black.png";

const PostById = (props) => {
  return (
    <>
      <div className="postContainer">
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
      </div>
    </>
  );
};

export default PostById;
