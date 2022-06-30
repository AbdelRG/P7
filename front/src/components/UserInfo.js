import React from "react";
import { Button } from "react-bootstrap";
import React from "react";
import React, { useState } from "react";
import getUser from "../apiCall/getUser";
import isAdmin from "../auth/isAdmin";
import deleteUser from "../apiCall/deleteUser";

const UserInfo = (props) => {
  const [role, setRole] = useState("");

  const user = () => {
    getUser().then((res) => {
      setRole(res.user.role);
    });
  };

  user();

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await deleteUser(props.user.id);
    console.log(response);
  };

  return (
    <>
      <div className="userInfoContainer">
        <div className="userInfo">
          {props.user.imageUrl && (
            <img
              className="ComentprofilPic"
              src={props.user.imageUrl}
              alt="image de profil"
            />
          )}
          <p className="userComentPseudo">{props.user.pseudo}</p>
        </div>
        {isAdmin(role) && (
          <Button variant="danger" onClick={handleDelete}>
            Supprimer
          </Button>
        )}
      </div>
    </>
  );
};

export default UserInfo;
