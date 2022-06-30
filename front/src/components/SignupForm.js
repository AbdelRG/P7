import React, { useState } from "react";
import "../../public/assets/style/index.scss";
import { Form, Button, Alert } from "react-bootstrap";
import signupFecth from "../apiCall/signupCall";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, pseudo, password };
    const response = await signupFecth(body);

    if (response && response.email != "") {
      setErrMsg(response.email);
      setShow(false);
    } else if (response && response.pseudo != "") {
      setErrMsg(response.pseudo);
      setShow(false);
    } else if (response && response.password != "") {
      setErrMsg(response.password);
      setShow(false);
    } else {
      setShow(true);
      setErrMsg("");
    }
  };

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Compte créer</Alert.Heading>
        <p>Pour vous connecter veuillez cliquer sur connexion</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Fermer
          </Button>
        </div>
      </Alert>

      <Form className="signupForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPseudo">
          <Form.Label>Pseudonyme</Form.Label>
          <Form.Control
            type="pseudo"
            placeholder="Entrez votre Pseudonyme"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
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
        <Button variant="dark" type="submit" onClick={handleSubmit}>
          S'inscrire
        </Button>
        <p className="errorMsg">{errMsg}</p>
      </Form>
    </>
  );
};
export default SignupForm;
