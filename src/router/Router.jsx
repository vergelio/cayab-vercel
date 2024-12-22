// src/router/Router.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AnimeList from "../pages/AnimeList";

const AppRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/anime-list" element={<AnimeList />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRouter;
