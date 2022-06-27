import React from "react";
import { Button } from "react-bootstrap";
import getUserById from "../apiCall/getUserById";
import React, { useEffect } from "react";
import React, { useState } from "react";
import deletePost from "../apiCall/deletePost";

import React from "react";

const PostByUser = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserById(props.post.userId).then((res) => {
      setUser(res.user);
    });
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await deletePost(props.post.id);
    console.log(response);
  };
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
        <div className="postInfo"></div>
        <Button variant="danger" onClick={handleDelete}>
          Supprimer
        </Button>
      </div>
    </>
  );
};

export default PostByUser;
