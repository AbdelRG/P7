import React from "react";
import "../../public/assets/style/index.scss";
import { Form, Button } from "react-bootstrap";

const SignupForm = () => {
  return (
    <Form className="signupForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="Entrez votre email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Button variant="dark" type="submit">
        S'inscrire
      </Button>
    </Form>
  );
};
export default SignupForm;
