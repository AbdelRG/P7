import React from "react";
import getUserById from "../apiCall/getUserById";
import React, { useEffect } from "react";
import React, { useState } from "react";

import profilPic from "../../public/assets/images/icon-left-font-monochrome-black.png";

const PostById = () => {
  return (
    <>
      <div className="postContainer">
        <div className="postContent">
          <h4 className="postTitle">Title</h4>
          <p className="postText">Text</p>

          <img className="postPic" src={profilPic} alt="image du post" />
        </div>
      </div>
    </>
  );
};

export default PostById;
