import React from "react";
import { Route, Routes } from "react-router-dom";

import MarvelPage from "../heroes/pages/MarvelPage";
import DcPages from "../heroes/pages/DcPages";
import LoginPage from "../auth/pages/LoginPage";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPages />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default AppRouter;
