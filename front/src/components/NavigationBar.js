import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../../public/assets/style/index.scss";
import React from "react";
import React, { useState } from "react";
import getUser from "../apiCall/getUser";
import { useNavigate } from "react-router-dom";
import isAdmin from "../auth/isAdmin";

const NavigationBar = () => {
  const [pseudo, setPseudo] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const user = () => {
    getUser().then((res) => {
      setPseudo(res.user.pseudo);
      setRole(res.user.role);
    });
  };

  user();

  const deconnexion = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  const profil = (e) => {
    e.preventDefault();
    navigate("/profilPage");
  };
  const accueil = (e) => {
    e.preventDefault();
    navigate("/postsPage");
  };
  const postPage = (e) => {
    e.preventDefault();
    navigate("/postByUserPage");
  };

  const usersPage = (e) => {
    e.preventDefault();
    navigate("/usersPage");
  };

  const moderatePostPage = (e) => {
    e.preventDefault();
    navigate("/moderatePostPage");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Groupomania</Navbar.Brand>
          <Nav className="me-auto navBar">
            <Nav.Link href="#home" onClick={accueil}>
              Accueil
            </Nav.Link>
            {isAdmin(role) && (
              <Nav.Link href="#home" onClick={usersPage}>
                Gerer les utilisateurs
              </Nav.Link>
            )}
            {isAdmin(role) && (
              <Nav.Link href="#home" onClick={moderatePostPage}>
                Gerer les posts
              </Nav.Link>
            )}
            <Container className="navBarDropdown">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={pseudo}
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.2" onClick={profil}>
                  Voir Profil
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={postPage}>
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
