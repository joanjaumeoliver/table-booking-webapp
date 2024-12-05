import React from 'react';

function Highlights() {
  return (
<section id="highlights">
  <h2>This Week’s Specials</h2>
  <div class="highlight-container">
    <article class="highlight-item">
      <img src="special-dish1.jpg" alt="Dish 1" />
      <h3>Dish Name 1</h3>
      <p>A delicious blend of flavors and textures.</p>
    </article>
    <article class="highlight-item">
      <img src="special-dish2.jpg" alt="Dish 2" />
      <h3>Dish Name 2</h3>
      <p>Fresh ingredients and vibrant flavors.</p>
    </article>
    <article class="highlight-item">
      <img src="special-dish3.jpg" alt="Dish 3" />
      <h3>Dish Name 3</h3>
    </article>
  </div>
</section>

  );
}

export default Highlights;
