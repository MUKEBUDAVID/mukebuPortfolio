import React from "react";
import { useState,useEffect } from "react";


function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }




  return (
    <header className={scrolled ? "scrolled" : ""}  >
      <p className="logo">Mukebu</p>

      <div className="right">
        <nav >
          <a href="#home" className={activeLink === "home" ? "active" : ""} onClick={() => onUpdateActiveLink('home')}>Home</a>
          <a href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() => onUpdateActiveLink('skills')} >Skills</a>
          <a href="#projects" className={activeLink === "projects" ? "active" : ""} onClick={() => onUpdateActiveLink('projects')} >Projects</a>
        </nav>

        <section className="reseaux">
          <a href="#">
            <img src="/nav-icon1.svg" alt="" />
          </a>
          <a href="#">
            <img src="/nav-icon2.svg" alt="" />
          </a>
          <a href="#">
            <img src="/nav-icon3.svg" alt="" />
          </a>
        </section>


<button type="button" className="lestCon"><a href="#connect"> Let's Connect</a></button>

      </div>
    </header>
  );
}

export default Header;
