import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mll3r1h",    
        "template_dhr7j9b",  
        form.current,
        "7Zg_VT8AfwCTpztot"   
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("❌ Email send failed:", error);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="resume-section contact-section">
      <h2>Contact Me</h2>
      <p className="contact-text">
        Let’s build something amazing together! Fill out the form or reach me directly via email.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>

      <div className="contact-socials">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </section>
  );
};

export default Contact;
