import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const useAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const log = useAuth();

  if (!log) {
    useEffect(() => {
      navigate("/");
    });
  } else {
    return (
      <>
        <NavigationBar />
        <div>
          <h2>POST</h2>
          <h3>POST</h3>
        </div>
        <Footer />
      </>
    );
  }
};
export default Login;
