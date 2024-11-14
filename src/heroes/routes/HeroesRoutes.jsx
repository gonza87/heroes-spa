import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";
import MarvelPage from "../pages/MarvelPage";
import DcPages from "../pages/DcPages";
import DcSearch from "../pages/DcSearch";
import HeroPage from "../pages/HeroPage";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPages />} />
          <Route path="/search" element={<DcSearch />} />
          <Route path="/hero" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
