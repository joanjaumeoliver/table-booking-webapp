import React from 'react';
import { Link } from 'react-router';
import banner_logo from '../images/banner.jpg';

const heroStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '5rem',
  flexWrap: 'wrap',
  textAlign: 'center',
  backgroundColor: '#495E57'
};

const heroTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-around',
  maxWidth: '600px',
  margin: '0 20px',
};

const headingStyle = {
  fontSize: '5rem',
  margin: '0',
  color: '#F4CE14',
  fontWeight: '200',
  fontFamily: 'Markazi Text, serif'
};

const subheadingStyle = {
  fontSize: '2rem',
  margin: '10px 0',
  color: '#FFFFFF',
  fontWeight: '200',
  fontFamily: 'Markazi Text, serif'
};

const paragraphStyle = {
  fontSize: '2rem',
  margin: '20px 0',
  color: '#FFFFFF',
  fontWeight: '200',
  fontFamily: 'Markazi Text, serif'
};

const buttonStyle = {
  padding: '10px 20px',
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

const imageStyle = {
  margin: '10px',
  width: '25vw',
  maxWidth: '400px',
  height: 'auto',
  borderRadius: '8px',
};

function Hero() {
  return (
    <section style={heroStyle}>
      <div style={heroTextStyle}>
        <h2 style={headingStyle}>Little Lemon</h2>
        <h3 style={subheadingStyle}>Chicago</h3>
        <p style={paragraphStyle}>
          We are a family-owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link to="/reservation">
          <button aria-label="Reserve a table" style={buttonStyle}>Reserve Table</button>
        </Link>
      </div>
      <img src={banner_logo} alt="banner-image" style={imageStyle} />
    </section>
  );
}

export default Hero;
