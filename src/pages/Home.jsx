import React from 'react';

import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

function Home() {
  return (
    <>
      <section aria-labelledby="hero-section">
        <Hero />
      </section>

      <section aria-labelledby="highlights-section">
        <Highlights />
      </section>

      <section aria-labelledby="testimonials-section">
        <Testimonials />
      </section>

      <section aria-labelledby="about-section">
        <About />
      </section>
    </>
  );
}

export default Home;
