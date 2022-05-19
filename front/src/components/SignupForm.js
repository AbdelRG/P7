import React, { useState } from "react";
import "../../public/assets/style/index.scss";
import { Form, Button } from "react-bootstrap";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email, pseudo, password };
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(() => {
      console.log("compte créer");
    });
  };

  return (
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
    </Form>
  );
};
export default SignupForm;
