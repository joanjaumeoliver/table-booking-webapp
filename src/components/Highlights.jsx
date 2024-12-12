import React from 'react';

function Highlights() {
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
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  };

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
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '8px',
  };

  const h3Style = {
    fontSize: '1.25rem',
    margin: '10px 0',
    position: 'relative',
    display: 'inline-block',
  };

  const pStyle = {
    fontSize: '1rem',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const orderButtonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <section id="highlights" style={sectionStyle}>
      <div style={headingStyle}>
        <h2>This Week’s Specials</h2>
      </div>
      <div style={highlightListStyle}>
        <article style={highlightItemStyle}>
          <img src="special-dish1.jpg" alt="Dish 1" style={imageStyle} />
          <h3 style={h3Style}>
            Dish Name 1
          </h3>
          <p style={pStyle}>A delicious blend of flavors and textures.</p>
          <p style={priceStyle}>$19.99</p>
          <button style={orderButtonStyle}>Order for Delivery</button>
        </article>
        <article style={highlightItemStyle}>
          <img src="special-dish2.jpg" alt="Dish 2" style={imageStyle} />
          <h3 style={h3Style}>
            Dish Name 2
          </h3>
          <p style={pStyle}>Fresh ingredients and vibrant flavors.</p>
          <p style={priceStyle}>$22.99</p>
          <button style={orderButtonStyle}>Order for Delivery</button>
        </article>
        <article style={highlightItemStyle}>
          <img src="special-dish3.jpg" alt="Dish 3" style={imageStyle} />
          <h3 style={h3Style}>
            Dish Name 3
          </h3>
          <p style={pStyle}>Something new and delicious.</p>
          <p style={priceStyle}>$18.50</p>
          <button style={orderButtonStyle}>Order for Delivery</button>
        </article>
      </div>
    </section>
  );
}

export default Highlights;
