import React from "react";
import { NavBar } from "../../ui/components/NavBar";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPages />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
