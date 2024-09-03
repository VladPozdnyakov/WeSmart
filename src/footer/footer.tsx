import React from "react";
import "./Footer.css";
import Logotype from "../main/images/Logotype.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logotype} alt="Company Logo" />
        </div>
        <nav className="footer-nav">
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
            <li>
              <a href="/request-demo">Request Demo</a>
            </li>
          </ul>
        </nav>
        <div className="footer-language">
          <span>Language: English</span>
        </div>
      </div>
    </footer>
  );
};
