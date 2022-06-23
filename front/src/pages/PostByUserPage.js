import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import React, { useState, useEffect } from "react";
import getPostByUserId from "../apiCall/getPostByUserId";
import PostByUser from "../components/PostByUser";

const PostByUserPage = () => {
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    getPostByUserId().then((res) => {
      setPostArray(res);
    });
  }, []);

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
