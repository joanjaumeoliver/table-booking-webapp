import React from 'react';

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

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Coming Soon!</h1>
      <p style={paragraphStyle}>This page is under development. Stay tuned!</p>
    </div>
  );
};

export default ComingSoon;
