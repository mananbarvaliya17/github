import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <h4>We provide the best solutions for your web needs. Contact us to know more!</h4>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <div className='footer-page'>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/Collection"><h3>Collection</h3></Link>
            <Link to="/Contectus"><h3>contectus</h3></Link>
            <Link to="/Login"><h3>Login</h3></Link>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <h4>Email: info@example.com</h4>
          <h4>Phone: +91 12345 67890</h4>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>&copy; 2025 YourCompany. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
