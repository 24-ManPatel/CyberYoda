import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="company-name">Cyber Yoda</h2>
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blogs</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
        <div className="footer-middle">
          <h3 className="address-title">Our Address</h3>
          <p className="address">
            106, Sreedhar Aurum,<br />
            Beside Shivalay Parisar,<br />
            Kudasan Gandhinagar-382421
          </p>
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.656863892189!2d72.63530531496075!3d23.218525084860217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a0bdefffffd%3A0x96f8f5f70ec6d759!2s106%2C%20Sreedhar%20Aurum%2C%20Beside%20Shivalay%20Parisar%2C%20Kudasan%2C%20Gandhinagar%2C%20Gujarat%20382421!5e0!3m2!1sen!2sin!4v1629803777873!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/synconic/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
          </div>
          <p className="footer-text">© {new Date().getFullYear()} Cyber Yoda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
