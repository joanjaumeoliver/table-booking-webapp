import React from 'react';
import { Link } from 'react-router-dom';

const heroStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '0rem 2rem'
};

const heroTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

function Hero() {
  return (
    <section style={heroStyle}>
    <div style={heroTextStyle}>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>
        We are a family owned Mediterraneran restuarent, focusd on
        traditional recipes served with modern twist.
      </p>
      <Link to="/reservation">
        <button aria-label="on Click ">Reserve Table</button>
      </Link>
    </div>
    <img src='banner.jpg' alt="banner-image" />
  </section>
  );
}

export default Hero;
