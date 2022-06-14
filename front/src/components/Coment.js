import React from "react";
import profilPic from "../../public/assets/images/icon-left-font-monochrome-black.png";
import { Form, Button, Modal, FloatingLabel } from "react-bootstrap";

const Coment = () => {
  return (
    <>
      <div className="comentCardContainer">
        <div className="comentFormContainer">
          <h5 className="comentTitle">Commentaire</h5>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Group className="position-relative mb-3">
              <Form.Control
                as="textarea"
                style={{ height: "100px", width: "300px" }}
              />
            </Form.Group>
          </FloatingLabel>
          <Button variant="dark" className="comentButton">
            commenter
          </Button>
        </div>
        <div className="comentContainer">
          <div className="userComentInfo">
            <img
              className="ComentprofilPic"
              src={profilPic}
              alt="image de profil"
            />
            <p className="userComentPseudo">Pseudo</p>
          </div>
          <p className="coment">comment</p>
        </div>
      </div>
    </>
  );
};

export default Coment;
