import React from "react";
import logo from "../../Assets/KOC-Logo.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="mainNav">
      <div className="navContainer">
        <div className="navigationLogo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navigationLinks">
          <ul>
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
            <li className="ctaRegister">
              <a href="/registration">
                <p>Register Now</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
