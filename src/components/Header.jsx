import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <h1 className="logo">SHATANSH</h1>

      {/* Desktop Nav */}
      <nav className="nav-links">
        <a href="#hero">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      {/* Hamburger (Mobile) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Dropdown */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECT</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
