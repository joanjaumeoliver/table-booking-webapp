import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem'
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '1rem',
  whiteSpace: 'nowrap',
};

const Header = () => {
  return (
    <header style={headerStyle}>
     <img src="logo.png" alt="Little Lemon Logo"/>
     <nav>
     <ul style={navStyle}>
          <li><Link to="/home" style={linkStyle}>HOME</Link></li>
          <li><Link to="/about" style={linkStyle}>ABOUT</Link></li>
          <li><Link to="/menu" style={linkStyle}>MENU</Link></li>
          <li><Link to="/reservations" style={linkStyle}>RESERVATIONS</Link></li>
          <li><Link to="/order" style={linkStyle}>ORDER ONLINE</Link></li>
          <li><Link to="/login" style={linkStyle}>LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
