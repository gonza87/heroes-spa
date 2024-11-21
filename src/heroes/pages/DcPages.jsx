import React from "react";
import { HeroList } from "../components/HeroList";

function DcPages() {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </>
  );
}

export default DcPages;
