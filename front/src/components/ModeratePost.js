import React from "react";

import { Button } from "react-bootstrap";

import getUserById from "../apiCall/getUserById";
import React, { useEffect } from "react";
import React, { useState } from "react";
import getUser from "../apiCall/getUser";
import isAdmin from "../auth/isAdmin";
import restorePost from "../apiCall/restorePost";
import adminDeletePost from "../apiCall/adminDeletePost";

const ModeratePost = (props) => {
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  useEffect(() => {
    getUserById(props.post.userId).then((res) => {
      setUser(res.user);
    });
  }, []);

  const userRole = () => {
    getUser().then((res) => {
      setRole(res.user.role);
    });
  };

  userRole();

  const handleRestore = async (e) => {
    e.preventDefault();

    const response = await restorePost(props.post.id);
    console.log(response);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await adminDeletePost(props.post.id);
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
          {isAdmin(role) && (
            <Button variant="success" onClick={handleRestore}>
              Restaurer
            </Button>
          )}
          {isAdmin(role) && (
            <Button variant="danger" onClick={handleDelete}>
              Supprimer
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ModeratePost;
