import React from "react";
import Hero from "../containers/hero";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {

  useDocumentTitle("Salinaka | Home");
  
  return (
    <div className="py-[3rem] px-[4rem] relative flex ">
      <Hero />
    </div>
  );
};

export default Home;
