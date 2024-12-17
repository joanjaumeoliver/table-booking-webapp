import React from 'react';
import { Link } from 'react-router';

const ComingSoon = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '10vh',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '5vh',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const buttonStyle = {
    margin: '30px',
    padding: '5px 20px',
    fontSize: '2rem',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '200',
    color: 'black',
    borderRadius: '16px',
    fontFamily: 'Markazi Text, serif',
    backgroundColor: '#F4CE14',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Coming Soon!</h1>
      <p style={paragraphStyle}>This page is under development. Stay tuned!</p>
      <Link to="/">
          <button aria-label="Reserve a table" style={buttonStyle}>Back to Home</button>
        </Link>
    </div>
  );
};

export default ComingSoon;
