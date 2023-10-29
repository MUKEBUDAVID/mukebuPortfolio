import React from "react";


function Header() {
  return (
    <header>
      <p className="logo">Mukebu</p>

      <div className="right">
        <nav >
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
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

        <button type="button">Let's Connect</button>
      </div>
    </header>
  );
}

export default Header;
