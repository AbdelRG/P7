import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import React, { useEffect } from "react";
import getDeletedPost from "../apiCall/getDeletedPost";
import ModeratePost from "../components/ModeratePost";
import evtSource from "../apiCall/ssEvent";
import getUser from "../apiCall/getUser";
import { useNavigate } from "react-router-dom";

const ModeratePostPage = () => {
  const [postArray, setPostArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    user();
  });

  const user = async () => {
    await getUser().then((res) => {
      if (res.user.role == 0) {
        navigate("/postsPage");
      }
    });
  };

  useEffect(() => {
    getDeletedPost().then((res) => {
      setPostArray(res);
    });
  }, []);

  evtSource.addEventListener("restorePost", async (e) => {
    const newData = JSON.parse(e.data);

    setPostArray(postArray.filter((post) => post.id !== newData.id));
  });

  evtSource.addEventListener("adminDeletePost", async (e) => {
    const newData = JSON.parse(e.data);

    setPostArray(postArray.filter((post) => post.id !== newData.id));
  });

  return (
    <>
      <NavigationBar />
      <div className="moderatePostPageContainer">
        {postArray.map((element, i) => (
          <div className="containerPost" key={i}>
            <ModeratePost post={element} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ModeratePostPage;
