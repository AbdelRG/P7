import React, { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import getAllPost from "../apiCall/getAllPost";
import evtSource from "../apiCall/ssEvent";

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
    evtSource.addEventListener("post", async (e) => {
      const newData = e.data;
      console.log(postArray);
      await postArray.push(newData);
      //console.log(newArray);
      setPostArray(postArray);
    });
  }, []);
  evtSource.onerror = async function () {
    evtSource.close();
  };

  const posts = postArray.map((element) => {
    return (
      <div
        className="containerPost"
        key={element.id}
        onClick={() => postNavigate(element.id)}
      >
        <Post post={element} />
      </div>
    );
  });
  if (!log) {
    useEffect(() => {
      navigate("/");
    });
  } else {
    return (
      <>
        <NavigationBar />
        <div className="postPageContainer">
          <PostForm setArray={setPostArray} />
          {posts}
        </div>
        <Footer />
      </>
    );
  }
};
export default PostsPage;
