import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '2rem',
  gap: '2rem',
  flexWrap: 'nowrap',
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textAlign: 'left',
  flex: '1'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
};

const contactInlineStyle = {
  display: 'flex',
  gap: '1rem', // Space between phone and email
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <img src={Logo} alt="company-logo" />
      </div>

      <div style={sectionStyle}>
        <h3>Important Links</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/" style={linkStyle}>HOME</Link>
          </li>
          <li>
            <Link to="/coming-soon" style={linkStyle}>ABOUT</Link>
          </li>
          <li>
            <Link to="/reservations" style={linkStyle}>RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/coming-soon" style={linkStyle}>ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/coming-soon" style={linkStyle}>LOGIN</Link>
          </li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div style={sectionStyle}>
        <h3>Contact Us</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={contactInlineStyle}>
            <span>Address:</span> <span>Towncity, USA</span>
          </li>
          <li style={contactInlineStyle}>
            <span>Phone:</span> <span>+000000000</span>
          </li>
          <li style={contactInlineStyle}>
            <span>Email:</span> <span>abc@gmail.com</span>
          </li>
        </ul>
      </div>

      {/* Social Links Section */}
      <div style={sectionStyle}>
        <h3>Social Links</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <a href="/" style={linkStyle}>Facebook</a>
          </li>
          <li>
            <a href="/" style={linkStyle}>Instagram</a>
          </li>
          <li>
            <a href="/" style={linkStyle}>YouTube</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
