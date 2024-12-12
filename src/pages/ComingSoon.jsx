import React from 'react';

const ComingSoon = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh', // Full height of the viewport
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '8vw', // Responsive font size based on the viewport width
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '3vw', // Responsive font size for paragraph
    maxWidth: '600px', // Optional max width for better readability
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
