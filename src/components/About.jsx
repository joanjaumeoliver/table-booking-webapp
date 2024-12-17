import React from 'react';
import { sectionStyle, headingStyle } from '../styles';

function About() {

  const textStyle = {
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: '400',
    maxWidth: '35vw',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const imagecontainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={textStyle}>
        <h2 style={headingStyle}>About Little Lemon</h2>
        <p>Little Lemon was founded in [year]. We focus on fresh, local ingredients and provide an exceptional dining experience. Our passion for food is reflected in every dish we serve.</p>
      </div>
      <div style={imagecontainerStyle}>
        <img src="restaurant-photo.jpg" alt="Little Lemon Interior" style={imageStyle} />
      </div>
    </section>
  );
}

export default About;
