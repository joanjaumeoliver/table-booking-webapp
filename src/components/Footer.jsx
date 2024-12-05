import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section>
        <>
          <img src='logo.png' alt="company-image" />
          <p>
            We are a family owned Mediterraneran restuarant, focused on
            traditional recipes servred with a modern twist{" "}
          </p>
        </>
        <>
          <h3>Important Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/coming-soon">About</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/coming-soon">Order Online</Link>
            </li>
            <li>
              <Link to="/coming-soon">Login</Link>
            </li>
          </ul>
        </>

        <>
          <h3>Contact us</h3>
          <ul>
            <li>
              Address : <br /> Towncity USA
            </li>
            <li>
              Phone : <br /> +000000000
            </li>
            <li>
              Email : <br /> abc@gmail.com
            </li>
          </ul>
        </>
        <>
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
          </ul>
        </>
    </section>
  );
}

export default Footer;