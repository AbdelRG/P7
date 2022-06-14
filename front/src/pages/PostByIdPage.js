import React, { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import PostById from "../components/PostById";
import Profil from "../components/Profil";
import Coment from "../components/Coment";
import getPostById from "../apiCall/getPostById";
import getUserById from "../apiCall/getUserById";

const PostByIdPage = () => {
  const paramsId = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    getPostById(paramsId.id).then((res) => {
      setPost(res.post);
    });
  }, []);

  const [user, setUser] = useState({});
  useEffect(() => {
    getUserById(post.userId).then((res) => {
      setUser(res.user);
    });
  }, [post]);

  return (
    <>
      <NavigationBar />
      <div className="postByIdContainer">
        <PostById key={post.id} post={post} />
        <Profil key={user.id} user={user} />
      </div>
      <div className="commentPostContainer">
        <Coment />
      </div>
      <Footer />
    </>
  );
};

export default PostByIdPage;