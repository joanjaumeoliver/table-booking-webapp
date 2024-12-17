import React from 'react';
import { sectionStyle, headingStyle } from '../styles';
import Dish1 from '../images/greek salad.jpg';
import Dish2 from '../images/salad2.png';
import Dish3 from '../images/desert.jpg';

function Highlights() {

  const highlightListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    marginTop: '20px',
  };

  const highlightItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '250px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
  };

  const imageStyle = {
    width: '100%',
    height: '15vh',        // Set the height to the max height
    marginBottom: '10px',
    borderRadius: '8px',
  };

  const h3Style = {
    fontSize: '1.5rem',
    fontWeight: '500',
    margin: '10px 0',
    position: 'relative',
    display: 'inline-block',
  };

  const pStyle = {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '1.4rem',
    fontWeight: '500',
    marginBottom: '15px',
  };

  const orderButtonStyle = {
    padding: '10px 20px',
    fontSize: '1.25rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '200',
    color: 'black',
    borderRadius: '16px',
    fontFamily: 'Markazi Text, serif',
    backgroundColor: '#F4CE14',
  };

  return (
    <section id="highlights" style={sectionStyle}>
      <div style={headingStyle}>
        <h2>This Week’s Specials</h2>
      </div>
      <div style={highlightListStyle}>
        <article style={highlightItemStyle}>
          <img src={Dish1} alt="Greek Salad" style={imageStyle} />
          <h3 style={h3Style}>
            Greek Salad
          </h3>
          <p style={pStyle}>A delicious blend of flavors.</p>
          <p style={priceStyle}>$19.99</p>
          <button style={orderButtonStyle}>Order for Delivery</button>
        </article>
        <article style={highlightItemStyle}>
          <img src={Dish2} alt="Orange Salad" style={imageStyle} />
          <h3 style={h3Style}>
            Orange Salad
          </h3>
          <p style={pStyle}>Fresh ingredients and vibrant flavors.</p>
          <p style={priceStyle}>$22.99</p>
          <button style={orderButtonStyle}>Order for Delivery</button>
        </article>
        <article style={highlightItemStyle}>
          <img src={Dish3} alt="Cake" style={imageStyle} />
          <h3 style={h3Style}>
            Cake
          </h3>
          <p style={pStyle}>Something new and delicious.</p>
          <p style={priceStyle}>$8.50</p>
          <button style={orderButtonStyle}>Order for Delivery</button>
        </article>
      </div>
    </section>
  );
}

export default Highlights;
