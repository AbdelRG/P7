import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostsPage from "./pages/PostsPage";
import ProfilPage from "./pages/ProfilPage";
import PostByIdPage from "./pages/PostByIdPage";
import PostByUserPage from "./pages/PostByUserPage";
import UsersPage from "./pages/UsersPage";
import ModeratePostPage from "./pages/ModeratePostPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postsPage" element={<PostsPage />} />
        <Route path="/profilPage" element={<ProfilPage />} />
        <Route path="/postById/:id" element={<PostByIdPage />} />
        <Route path="/postByUserPage" element={<PostByUserPage />} />
        <Route path="/usersPage" element={<UsersPage />} />
        <Route path="/moderatePostPage" element={<ModeratePostPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
