import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import ComingSoon from './pages/ComingSoon';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
};

function App() {
  return (
    <BrowserRouter>
    <div style={appStyle}>
      <Header />
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="coming-soon" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
