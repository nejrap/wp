import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="socialMediaIcons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/nejra-pezo" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/artbynejra" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
