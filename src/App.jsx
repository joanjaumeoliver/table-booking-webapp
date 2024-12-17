import React, { useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import ComingSoon from './pages/ComingSoon';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return [
        '17:00', '18:00', '19:30', '20:00', '21:00', '22:00'
      ];
    default:
      return state;
  }
};

export const initializeTimes = () => [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
};

export const updateTimes = (dispatch, date) => {
  dispatch({ type: 'UPDATE_TIMES', date });
};

const App = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Header />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="reservation"
              element={<Reservation availableTimes={availableTimes} updateTimes={(date) => updateTimes(dispatch, date)} />}
            />
            <Route path="coming-soon" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
