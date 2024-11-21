import React from "react";
import { HeroList } from "../components/HeroList";

function MarvelPage() {
  return (
    <>
      <h1>Marvel comics</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
}

export default MarvelPage;
