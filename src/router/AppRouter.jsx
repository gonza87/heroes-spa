import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MarvelPage from "../heroes/pages/MarvelPage";
import DcPages from "../heroes/pages/DcPages";
import LoginPage from "../auth/pages/LoginPage";
import { NavBar } from "../ui/components/NavBar";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

function AppRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
}

export default AppRouter;
