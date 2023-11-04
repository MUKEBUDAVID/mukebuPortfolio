import React from "react";
import TrackVisibility from "react-on-screen";
import 'animate.css';


function Contact() {


    const handleSubmit = async (e) => {
        e.preventDefault();
       
      };







  return (
    <section className="contact">
      <TrackVisibility>
        {({ isVisible }) => (
          <img
            src="contact-img.svg"
            className={isVisible ? "animate__animated animate__zoomIn" : ""}
            id="center"
          />
        )}
      </TrackVisibility>

      <TrackVisibility>
      {({ isVisible }) => ( 
        <div  className={isVisible ? "animate__animated animate__fadeIn  divform" : "divform"}>
        <form action="" className="formContact" onSubmit={handleSubmit}>
          <label htmlFor="">Get In Touch</label>
          <div className="name">
            <input type="text" placeholder="First Name" name="" id=""/>
            <input type="text" placeholder="Last Name" name="" id="" />
          </div>
          <div className="email">
            <input type="email" placeholder="Email Address" name="" id="" />
            <input type="tel" placeholder="Phone No." name="" id="" />
          </div>

          
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="message"
            ></textarea>

            <button type="submit" className="submitBtn">
                <span>Send</span>
            </button>
        
        </form>
      </div>
      
      )}
      
      </TrackVisibility>
      
    </section>
  );
}

export default Contact;
