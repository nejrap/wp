
import React from "react"
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
        <div className="icons">
          <SocialMediaIcons />
        </div>
        <ul className="links">
          <li>
            <Link to="/" style={{ color: '#E97777' }}>Početna</Link>
          </li>
          <li>
            <Link to="/about" style={{ color: '#E97777' }}>O nama</Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: '#E97777' }}>Kontakt</Link>
          </li>
          <li>
            <Link to="/shop" style={{ color: '#E97777' }}>Shop</Link>
          </li>
        </ul>
        <p id="footer">2023 | Made with ♥</p>
      </div>
    )
};
export default Footer