import React from "react";

import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import getUser from "../apiCall/getUser";
import getUserById from "../apiCall/getUserById";
import deleteComent from "../apiCall/deleteComent";

const Coment = (props) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (props && props.coment.userId) {
      getUserById(props.coment.userId).then((res) => {
        setUser(res.user);
      });
    }
  }, [props]);

  const isUser = () => {
    getUser().then((res) => {
      setUserId(res.user.id);
    });

    if (userId == user.id) {
      return true;
    } else return false;
  };
  isUser();

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await deleteComent(props.coment.id);
    console.log(response);
  };

  return (
    <>
      <div className="comentCardContainer">
        <div className="comentContainer">
          <div className="userComentInfo">
            <img
              className="ComentprofilPic"
              src={user.imageUrl}
              alt="image de profil"
            />
            <p className="userComentPseudo">{user.pseudo}</p>
          </div>
          <p className="coment">{props.coment.text}</p>

          {isUser() && (
            <Button variant="danger" onClick={handleDelete}>
              Supprimer
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Coment;
