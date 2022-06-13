import React, { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import getAllPost from "../apiCall/getAllPost";
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

  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    getAllPost().then((res) => {
      setPostArray(res);
    });
  }, []);

  const posts = postArray.map((element) => {
    return <Post key={element.id} post={element} />;
  });
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
          {posts}
        </div>
        <Footer />
      </>
    );
  }
};
export default PostsPage;
