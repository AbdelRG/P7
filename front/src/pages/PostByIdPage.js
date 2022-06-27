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
import getComentsByPostId from "../apiCall/getComentsByPostId";
import ComentForm from "../components/ComentForm";
import evtSource from "../apiCall/ssEvent";

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
    if (post && post.userId) {
      getUserById(post.userId).then((res) => {
        setUser(res.user);
      });
    }
  }, [post]);
  const [comentArray, setComentArray] = useState([]);
  useEffect(() => {
    getComentsByPostId(paramsId.id).then((res) => {
      setComentArray(res);
    });
  }, []);

  evtSource.addEventListener("coment", async (e) => {
    await getComentsByPostId(paramsId.id).then((res) => {
      setComentArray(res);
    });

    const newData = JSON.parse(e.data);

    const newArray = [newData, ...comentArray];

    setComentArray(newArray);
  });

  evtSource.addEventListener("deleteComent", async (e) => {
    const newData = JSON.parse(e.data);

    setComentArray(comentArray.filter((coment) => coment.id !== newData.id));
  });

  const coments = comentArray.map((element) => {
    return <Coment coment={element} key={element.id} post={post} />;
  });

  return (
    <>
      <NavigationBar />

      <div className="postByIdContainer">
        <PostById key={post.id} post={post} />
        <Profil key={user.id} user={user} />
      </div>

      <div className="commentPostContainer">
        <ComentForm key={post.id} post={post} />
        {coments}
      </div>
      <Footer />
    </>
  );
};

export default PostByIdPage;
