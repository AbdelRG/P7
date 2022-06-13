import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostsPage from "./pages/PostsPage";
import ProfilPage from "./pages/ProfilPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/postsPage" element={<PostsPage />} />
        <Route path="/profilPage" element={<ProfilPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
