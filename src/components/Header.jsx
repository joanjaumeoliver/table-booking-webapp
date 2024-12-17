import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Logo from '../images/logo.svg';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  position: 'relative',
};

const navStyle = (isOpen) => ({
  listStyle: 'none',
  display: isOpen ? 'block' : 'none',
  flexDirection: 'column',
  gap: '1rem',
  position: 'absolute',
  top: '100%',
  right: '1rem',
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '1rem',
  zIndex: 1000,
});

const desktopNavStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: '500',
  fontSize: '1.5rem',
  whiteSpace: 'nowrap',
};

const imgStyle = {
  width: '10vw',
  minWidth:'200px',
};


const hamburgerStyle = {
  fontSize: '1.5rem',
  cursor: 'pointer',
  
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={headerStyle}>
      <img src={Logo} style={imgStyle} alt="Little Lemon Logo" />
      <nav>
        {/* Hamburger menu icon, visible only on mobile */}
        {isMobile && (
          <div
            style={hamburgerStyle}
            onClick={toggleMenu}
          >
            ☰
          </div>
        )}

        {/* Mobile navigation menu */}
        {isMobile && (
          <ul style={menuOpen ? navStyle(true) : navStyle(false)}>
            <li><Link to="/" style={linkStyle}>HOME</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>ABOUT</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>MENU</Link></li>
            <li><Link to="/reservation" style={linkStyle}>RESERVATIONS</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>ORDER ONLINE</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>LOGIN</Link></li>
          </ul>
        )}

        {/* Desktop navigation menu */}
        {!isMobile && (
          <ul style={desktopNavStyle}>
            <li><Link to="/" style={linkStyle}>HOME</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>ABOUT</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>MENU</Link></li>
            <li><Link to="/reservation" style={linkStyle}>RESERVATIONS</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>ORDER ONLINE</Link></li>
            <li><Link to="/coming-soon" style={linkStyle}>LOGIN</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
