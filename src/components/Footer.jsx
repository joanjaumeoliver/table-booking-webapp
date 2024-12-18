import React from 'react';
import { Link } from 'react-router';
import Logo from '../images/logo.svg';
import { sectionStyle } from '../styles';

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem',
  flexWrap: 'wrap', // Allow wrapping on smaller screens
  gap: '2rem',
  backgroundColor: '#f8f8f8',
  fontFamily: 'Markazi Text, serif',
};

const logoContainerStyle = {
  order: 0,
  width: '100%',
  textAlign: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'blue',
  whiteSpace: 'nowrap',
};

const ulStyle = {
  listStyle: 'none',
  fontWeight: '500',
  fontSize: '1.1rem',
  padding: 0,
};

const imgStyle = {
  width: '15vw',
  minWidth: '200px',
  height: 'auto',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      {/* Logo Section */}
      <div style={logoContainerStyle}>
        <img src={Logo} alt="Little Lemon Company Logo" style={imgStyle} />
      </div>

      {/* Navigation Section */}
      <section style={sectionStyle} aria-labelledby="important-links-heading">
        <h3 id="important-links-heading">Important Links</h3>
        <ul style={ulStyle}>
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
      </section>

      {/* Contact Us Section */}
      <section style={sectionStyle} aria-labelledby="contact-us-heading">
        <h3 id="contact-us-heading">Contact Us</h3>
        <ul style={ulStyle}>
          <li>
            <span>Address:</span> <br />
            <span>Towncity, USA</span>
          </li>
          <li>
            <span>Phone:</span> <br />
            <span>+000000000</span>
          </li>
          <li>
            <span>Email:</span> <br />
            <span>abc@gmail.com</span>
          </li>
        </ul>
      </section>

      {/* Social Links Section */}
      <section style={sectionStyle} aria-labelledby="social-links-heading">
        <h3 id="social-links-heading">Social Links</h3>
        <ul style={ulStyle}>
          <li>
            <a href="/" style={linkStyle} target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="/" style={linkStyle} target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="/" style={linkStyle} target="_blank" rel="noopener noreferrer">YouTube</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
