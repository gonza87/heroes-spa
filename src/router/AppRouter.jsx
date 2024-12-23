import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "../auth/pages/LoginPage";

import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
}

export default AppRouter;
