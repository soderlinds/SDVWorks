import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/releases">Releases</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/community">Community</Link>
        <Link to="/help">Help</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
