import React from "react";

import React, { useEffect } from "react";
import React, { useState } from "react";

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
