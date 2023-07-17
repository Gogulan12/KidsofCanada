import React from "react";
import logo from "../../Assets/KOC-Logo.png";
import "./Navigation.css";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mainNav">
      <div className="navContainer">
        <div className="navigationLogo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navigationLinks">
          <ul className={`nav-menu ${isOpen ? "navactive" : ""}`}>
            <li className="nav-item">
              <a href="/"> Home</a>
            </li>
            <li className="nav-item">
              <a href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a href="/#contact">Contact Us</a>
            </li>
            <li className="ctaRegister nav-item">
              <a href="/registration">
                <p>Register Now</p>
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isOpen ? "navactive" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
