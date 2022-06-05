import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "./components/Post";
import PostsPage from "./pages/PostsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/postsPage" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
