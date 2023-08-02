import React from "react";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";
import logo from "../Assets/Logo2.svg";


const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
];

const contacts = [
  { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
  { icon: faPhone, info: '(312) 593-2744', },
  { icon: faEnvelope, info: 'customer@littlelemon.com', },
];

const links = [
  { link: "Home", url: "/" },
  { link: "About", url: "/under-construction" },
  { link: "Menu", url: "/under-construction" },
  { link: "Reservations", url: "/reservations" },
  { link: "Order Online", url: "/under-construction" },
  { link: "Login", url: "/under-construction" },
];

export default function Footer() {
  return (
    <footer className="flex green-container footer-container">
      <img className="footer-logo" src={logo} alt="Little Lemon" />
      <div>
      <h3>Sitemap</h3>
      <ul>
        {links.map((item) => (
          <ul>
            <li style={{ listStyle: "none"}}>
              <a style={{textDecoration: "none"}}href={item.url}>{item.link}</a>
            </li>
          </ul>
        ))}
      </ul>
      </div>
      <div>
      <h3>Contact Us</h3>
      {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
      </div>
      <div>
      <h3>Social Media</h3>
      {socials.map((social, index) => 
            <a 
              key={index} 
              href={`https://www.${social.name}.com`} 
              target="_blank" 
              rel="noreferrer" 
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}

      </div>
    </footer>
  );
}