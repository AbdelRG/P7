import React, { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import getAllPost from "../apiCall/getAllPost";
import evtSource from "../apiCall/ssEvent";
import { Navigate } from "react-router-dom";

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
  const postNavigate = (id) => {
    navigate("/postByid/" + id);
  };
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    getAllPost().then((res) => {
      setPostArray(res);
    });
  }, []);
  evtSource.addEventListener("post", async (e) => {
    await getAllPost().then((res) => {
      setPostArray(res);
    });

    const newData = JSON.parse(e.data);

    const newArray = [newData, ...postArray];

    setPostArray(newArray);
  });

  evtSource.addEventListener("deletePost", async (e) => {
    const newData = JSON.parse(e.data);

    setPostArray(postArray.filter((post) => post.id !== newData.id));
  });

  if (!log) return <Navigate to="/" />;

  return (
    <>
      <NavigationBar />
      <div className="postPageContainer">
        <PostForm />
        {postArray.map((element, i) => (
          <div
            className="containerPost"
            key={i}
            onClick={() => postNavigate(element.id)}
          >
            <Post post={element} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default PostsPage;
