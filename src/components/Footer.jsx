import React from 'react';

function Footer() {
  return (
  <footer id="footer-navigation">
    <div class="logo">
      <img src="logo.png" alt="Little Lemon Logo" />
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
    <div class="contact-details">
      <p>Contact us at: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
    </div>
    <div class="social-media">
      <a href="https://facebook.com/">Facebook</a>
      <a href="https://instagram.com/">Instagram</a>
      <a href="https://twitter.com/">Twitter</a>
    </div>
  </footer>
  );
}

export default Footer;
