import React from "react";

import { Form, Button, FloatingLabel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import setComent from "../apiCall/setComent";
import getUserById from "../apiCall/getUserById";

const Coment = (props) => {
  const [text, setText] = useState("");
  const [postId, setPostId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPostId(props.post.id);

    const response = await setComent(text, postId);
    console.log(response);
  };
  const [user, setUser] = useState({});
  useEffect(() => {
    if (props && props.coment.userId) {
      getUserById(props.coment.userId).then((res) => {
        setUser(res.user);
      });
    }
  }, [props]);

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
        </div>
      </div>
    </>
  );
};

export default Coment;
