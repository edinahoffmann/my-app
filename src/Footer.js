import React from "react";
import logoWhiteImage from "./logo.svg";

export default function Footer() {
  return (
    <footer className="flex green-container footer-container">
      <img className="footer-logo" src={logoWhiteImage} alt="Little Lemon" />
      <div>Sitemap</div>
      <div>Contact Us</div>
      <div>Social media</div>
    </footer>
  );
}