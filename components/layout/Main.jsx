import React from "react";
import Baniere from "../molecule/Baniere";
import  Projets from "../molecule/Projets";
import Contact from "../atom/Contact";

function Main() {
  
  return (
    <main >
      <Baniere />
      <Projets/>
      <Contact/>
    </main>
  );
}

export default Main;
