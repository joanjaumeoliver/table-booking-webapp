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
  color: 'black',
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
  minWidth:'200px',
  height: 'auto',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={logoContainerStyle}>
        <img src={Logo} alt="company-logo" style={imgStyle} />
      </div>

      <div style={sectionStyle}>
        <h3>Important Links</h3>
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
      </div>

      {/* Contact Us Section */}
      <div style={sectionStyle}>
        <h3>Contact Us</h3>
        <ul style={ulStyle}>
          <li>
            <span>Address:</span> <br />
            <span>Towncity, USA</span>
          </li>
          <li>
            <span>Phone:</span> <br />
            <span>  +000000000</span>
          </li>
          <li>
            <span>Email:</span> <br />
            <span>  abc@gmail.com</span>
          </li>
        </ul>
      </div>

      {/* Social Links Section */}
      <div style={sectionStyle}>
        <h3>Social Links</h3>
        <ul style={ulStyle}>
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
