import React from 'react';
import { sectionStyle, headingStyle } from '../styles';

function Testimonials() {

  const testimonialContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const testimonialItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '250px',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  };

  const nameStyle = {
    fontWeight: '500',
    marginBottom: '5px',
    fontSize: '1.25rem',
    fontFamily: 'Markazi Text, serif',
  };

  const reviewStyle = {
    fontSize: '1.2rem',
    marginBottom: '15px',
  };

  const starRatingStyle = {
    fontSize: '1.25rem',
    marginBottom: '15px',
  };

  return (
    <section id="testimonials" style={sectionStyle}>
      <h2 style={headingStyle}>What Our Customers Are Saying</h2>
      <div style={testimonialContainerStyle}>
        <div style={testimonialItemStyle}>
          <img src="user1.jpg" alt="Customer 1" style={imageStyle} />
          <p style={nameStyle}>Customer 1</p>
          <p style={starRatingStyle}>⭐⭐⭐⭐⭐</p>
          <p style={reviewStyle}>"Great food, excellent service!"</p>
        </div>
        <div style={testimonialItemStyle}>
          <img src="user2.jpg" alt="Customer 2" style={imageStyle} />
          <p style={nameStyle}>Customer 2</p>
          <p style={starRatingStyle}>⭐⭐⭐⭐</p>
          <p style={reviewStyle}>"A lovely place with amazing ambiance!"</p>
        </div>
        <div style={testimonialItemStyle}>
          <img src="user3.jpg" alt="Customer 3" style={imageStyle} />
          <p style={nameStyle}>Customer 3</p>
          <p style={starRatingStyle}>⭐⭐⭐⭐⭐</p>
          <p style={reviewStyle}>"The best restaurant experience ever!"</p>
        </div>
        <div style={testimonialItemStyle}>
          <img src="user4.jpg" alt="Customer 4" style={imageStyle} />
          <p style={nameStyle}>Customer 4</p>
          <p style={starRatingStyle}>⭐⭐⭐⭐</p>
          <p style={reviewStyle}>"A must-visit place, fantastic food and service."</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
