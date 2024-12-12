import React from 'react';

function About() {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
    gap: '20px',
  };

  const textStyle = {
    flex: 1,
    textAlign: 'left',
    fontSize: '1.1rem',
    maxWidth: '600px',
  };

  const imageStyle = {
    flex: 1,
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={textStyle}>
        <h2 style={headingStyle}>About Little Lemon</h2>
        <p>Little Lemon was founded in [year]. We focus on fresh, local ingredients and provide an exceptional dining experience. Our passion for food is reflected in every dish we serve.</p>
      </div>
      <img src="restaurant-photo.jpg" alt="Little Lemon Interior" style={imageStyle} />
    </section>
  );
}

export default About;
