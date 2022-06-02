import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../../public/assets/style/index.scss";
import React from "react";
import React, { useState } from "react";
import getUser from "../apiCall/getUser";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [pseudo, setPseudo] = useState("");
  const navigate = useNavigate();
  const user = () => {
    getUser().then((res) => {
      setPseudo(res.user.pseudo);
    });
  };

  user();
  const deconnexion = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Groupomania</Navbar.Brand>
          <Nav className="me-auto navBar">
            <Nav.Link href="#home">Acceuil</Nav.Link>
            <Nav.Link href="#features">Publier</Nav.Link>

            <Container className="navBarDropdown">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={pseudo}
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.2">
                  Voir Profil
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Voir Post
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={deconnexion}>
                  Deconnexion
                </NavDropdown.Item>
              </NavDropdown>
            </Container>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
