import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setIsSticky(window.pageYOffset > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" className="nav-link">
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            ABOUT
          </a>
        </li>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a href="#portfolio" className="nav-link">PORTFOLIO</a>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/weather" className="dropdown-link">
                Weather App
              </Link>
              <Link to="/calculator" className="dropdown-link">
                Calculator
              </Link>
              <Link to="/rps" className="dropdown-link">
                RPS Game
              </Link>
            </div>
          )}
        </li>
        <li>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
