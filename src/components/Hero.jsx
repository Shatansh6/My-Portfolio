import React from "react";
import img from "../assets/img.png";
import image from "../assets/image.png";
const Hero = () => {
  return (
    <section id="hero">
      {/* LEFT: Text */}
      <div className="hero-text">
        <h2 className="hero-title">
          Hi, I'm <span>Shatansh Patel</span>
        </h2>

        <div id="typing" className="hero-subtitle">
          Frontend Developer | React, JavaScript, Responsive UI & API
          Integration{" "}
        </div>

        <a href="#projects" className=" hero-btn">
          View My Work
        </a>
        <a href="/ShatanshResume.pdf" className=" hero-btn" download>
          Download Resume
        </a>

        <div className="socials">
          <a
            href="https://github.com/Shatansh6"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="hero-image">
        <img src={image} alt="Shatansh Patel" />
      </div>
    </section>
  );
};

export default Hero;
