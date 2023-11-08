import React,{FormEvent} from "react";

function Footer() {
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer >
      <section className="Subscribe">
        <h3>Subscribe to our Newsletter <br /> & Never miss latest updates</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address " name="" id="" />
          <button type="submit">Submit</button>
        </form>
      </section>

<section className="Copyright">
  <p className="logo">Mukebu</p>


  <div className="divres">
  <div className="reseaux2">
          <a href="#">
            <img src="/nav-icon1.svg" alt="" />
          </a>
          <a href="#">
            <img src="/nav-icon2.svg" alt="" />
          </a>
          <a href="#">
            <img src="/nav-icon3.svg" alt="" />
          </a>
        </div>
<p className="Reserved">Copyright 2022. All Rights Reserved</p>
  </div>
  

</section>



    </footer>
  );
}

export default Footer;
