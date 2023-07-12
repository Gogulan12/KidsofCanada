import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="footerHeader">
          <h4 className="footerLogo">Kids of Canada</h4>
          <nav className="footerNav">
            <ul>
              <li>
                <a href="/" className="active">
                  home
                </a>
              </li>
              <li>
                <a href="/#about">about</a>
              </li>
              <li>
                <a href="/#contact">contact us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="copyright">
          <p>©️ Kids of Canada 2023</p>
        </div>
      </div>
    </footer>
  );
}
