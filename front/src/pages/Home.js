import React from "react";
import SignupForm from "../components/SignupForm";
import Logo from "../../public/assets/images/icon-left-font-monochrome-black.png";
import { NavLink } from "react-bootstrap";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const Home = () => {
  return (
    <>
      <div className="home">
        <img className="logo" src={Logo} alt="logo groupomania" />
        <div className="signupForm-container">
          <SignupForm />

          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
