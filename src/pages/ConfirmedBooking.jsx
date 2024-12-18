import React from 'react';
import { Link } from 'react-router';

const ConfirmedBooking = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Your booking has been confirmed!</h1>
      <p style={paragraphStyle}>Thank you for booking with us. We look forward to your visit.</p>
      <Link to="/" style={buttonStyle}>Back to Home</Link>
    </div>
  );
};

const buttonStyle = {
  margin: '30px',
  padding: '10px 30px',
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

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '40vh',
  textAlign: 'center',
  padding: '20px',
};

const headingStyle = {
  fontSize: '10vh',
  marginBottom: '20px',
  wordWrap: 'break-word',
};

const paragraphStyle = {
  fontSize: '5vh',
  maxWidth: '600px',
  margin: '0 auto',
};

export default ConfirmedBooking;
