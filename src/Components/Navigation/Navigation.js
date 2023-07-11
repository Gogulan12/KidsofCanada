import React from "react";
import logo from "../../Assets/KOC-Logo.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="mainNav">
      <div className="navContainer">
        <div className="navigationLogo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navigationLinks">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li className="ctaRegister">
              <p>Register Now</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
