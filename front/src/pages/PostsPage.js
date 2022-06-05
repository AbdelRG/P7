import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";

const useAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const PostsPage = () => {
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
        <div className="login">
          <PostForm />
          <Post />
          <Post />
        </div>
        <Footer />
      </>
    );
  }
};
export default PostsPage;
