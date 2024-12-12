import React from 'react';

function Testimonials() {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const testimonialContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Default row layout
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
    width: '250px', // Adjust to fit your design
    boxSizing: 'border-box',
  };

  const imageStyle = {
    width: '80px', // Profile image size
    height: '80px',
    borderRadius: '50%', // Circular profile image
    objectFit: 'cover',
    marginBottom: '15px',
  };

  const nameStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const reviewStyle = {
    fontSize: '1rem',
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
          <p style={starRatingStyle}>⭐⭐⭐⭐⭐</p>
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
          <p style={starRatingStyle}>⭐⭐⭐⭐⭐</p>
          <p style={reviewStyle}>"A must-visit place, fantastic food and service."</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
