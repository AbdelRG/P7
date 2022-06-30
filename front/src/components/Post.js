import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import getUserById from "../apiCall/getUserById";
import React, { useEffect } from "react";
import React, { useState } from "react";
import isAdmin from "../auth/isAdmin";
import deletePost from "../apiCall/deletePost";
import getUser from "../apiCall/getUser";

const Post = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserById(props.post.userId).then((res) => {
      setUser(res.user);
    });
  }, []);

  const [role, setRole] = useState("");

  const userRole = () => {
    getUser().then((res) => {
      setRole(res.user.role);
    });
  };

  userRole();

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
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
        <div className="postInfo">
          <FontAwesomeIcon className="postIcon" icon={faComments} />
        </div>
        {isAdmin(role) && (
          <Button
            variant="danger"
            className="deletePostButton"
            onClick={handleDelete}
          >
            Supprimer
          </Button>
        )}
      </div>
    </>
  );
};

export default Post;
