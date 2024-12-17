import React from 'react';

const ConfirmedBooking = () => {
  return (
    <div style={containerStyle}>
    <h1 style={headingStyle}>Your booking has been confirmed!!</h1>
    <p style={paragraphStyle}>Thank you for booking with us. We look forward to your visit.</p>
  </div>
  );
};

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

export default ConfirmedBooking;
