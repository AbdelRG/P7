import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import React, { useState, useEffect } from "react";
import getPostByUserId from "../apiCall/getPostByUserId";
import PostByUser from "../components/PostByUser";
import evtSource from "../apiCall/ssEvent";

const PostByUserPage = () => {
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    getPostByUserId().then((res) => {
      setPostArray(res);
    });
  }, []);
  evtSource.addEventListener("deletePost", async (e) => {
    const newData = JSON.parse(e.data);

    setPostArray(postArray.filter((post) => post.id !== newData.id));
  });

  const posts = postArray.map((element) => {
    return (
      <div className="postByUserPageContainer " key={element.id}>
        <PostByUser post={element} />
      </div>
    );
  });

  return (
    <>
      <NavigationBar />
      {posts}
      <Footer />
    </>
  );
};

export default PostByUserPage;
