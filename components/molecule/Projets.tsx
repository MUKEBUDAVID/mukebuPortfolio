import React from "react";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import BarProjets from  "../atom/BarProjets"


function Projets() {
  return (
    <section className="projets" id="projects">
       <TrackVisibility>
      {({ isVisible }) => 
      <div  className={isVisible ? "animate__animated animate__fadeIn": ""} id="center">
      <h3>Projects</h3>
      <p className="exemple_projet">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </p>
      <BarProjets />
    </div>
      }
      </TrackVisibility>
    </section>
  );
}

export default Projets;
