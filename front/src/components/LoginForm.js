import { Form, Button, Modal } from "react-bootstrap";
import React from "react";
import React, { useState } from "react";
import loginFecth from "../apiCall/loginCall";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, password };
    const response = await loginFecth(body);

    if (response.status === 400) {
      setErrMsg("email ou mdp incorrect");
    }
    if (response.status === 200) {
      navigate("/postsPage");
    }
  };

  return (
    <>
      <Button variant="dark" className="buttonConnect" onClick={handleShow}>
        Vous avez déja un compte ?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
          <p className="errorMsg">{errMsg}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleSubmit}>
            Connexion
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginForm;
