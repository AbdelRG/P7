import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { Form, Button, Modal, FloatingLabel } from "react-bootstrap";
import React, { useState } from "react";
import updateUser from "../apiCall/updateUser";

import getUser from "../apiCall/getUser";

const ProfilPage = () => {
  const [show, setShow] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [bio, setBio] = useState("");
  const [profilPic, setProfilPic] = useState("");
  const [bioUpdate, setBioUpdate] = useState("");
  const [file, setFile] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    formData.append("bio", bioUpdate);
    const response = await updateUser(formData);
    console.log(response);
    setShow(false);
  };
  const user = () => {
    getUser().then((res) => {
      setPseudo(res.user.pseudo);
      setBio(res.user.bio);
      setProfilPic(res.user.imageUrl);
    });
  };
  user();
  return (
    <>
      <NavigationBar />
      <div className="profilPageContainer">
        <div className="userInfoContainer">
          <div className="userProfil">
            {profilPic && (
              <img
                className="profilePagePic"
                src={profilPic}
                alt="image de profil"
              />
            )}

            <p className="profilePagePseudo">{pseudo}</p>
          </div>
          <Button
            variant="dark"
            className="profilePageButton"
            onClick={handleShow}
          >
            Modifier le profil
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Mis a jour du Profil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form>
                <FloatingLabel controlId="floatingTextarea2">
                  <Form.Group className="position-relative mb-3">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={bioUpdate}
                      onChange={(e) => setBioUpdate(e.target.value)}
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </FloatingLabel>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Image de Profil</Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    file={file}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Retour
              </Button>
              <Button variant="dark" onClick={handleSubmit}>
                Mettre a jour
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="bioContainer">
          <h5 className="bioTitle">Bio</h5>
          <p className="bio">{bio}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilPage;
