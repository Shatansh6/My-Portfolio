import React from "react";

const About = () => {
  return (
    <section id="about" className="resume-section about-section">
      <h2>About Me</h2>

      <div className="about-wrapper">
        <p className="about-lead">
          Hi, I’m <strong>Shatansh Patel</strong>, a final-year Computer Science
          student who enjoys turning ideas into clean, interactive web
          experiences.
        </p>

        <div className="about-content">
          <p>
            I’m passionate about building{" "}
            <strong>modern, responsive, and user-friendly web applications</strong>{" "}
            with a strong focus on clarity, usability, and performance.
          </p>

          <p>
            My background in <strong>problem-solving and core computer science
            concepts</strong> helps me write structured, maintainable code rather
            than just making things “work.”
          </p>

          <p>
            I’m continuously learning, improving my development workflow, and
            pushing myself to build projects that reflect real-world product
            thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
