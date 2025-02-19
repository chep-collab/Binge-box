import React from 'react';
import '../styles.css'; // Corrected import statement
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Binge-Box. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/YourBingeBoxPage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://www.twitter.com/YourBingeBoxHandle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.instagram.com/YourBingeBoxInstagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.youtube.com/YourBingeBoxYouTube" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;