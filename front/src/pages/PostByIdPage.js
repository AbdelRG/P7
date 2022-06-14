import React, { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import PostById from "../components/PostById";
import Profil from "../components/Profil";
import Coment from "../components/Coment";

const PostByIdPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="postByIdContainer">
        <PostById />
        <Profil />
      </div>
      <div className="commentPostContainer">
        <Coment />
      </div>
      <Footer />
    </>
  );
};

export default PostByIdPage;
