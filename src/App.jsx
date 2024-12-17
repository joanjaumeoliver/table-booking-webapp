import React, { useReducer, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import ComingSoon from './pages/ComingSoon';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';

import { fetchAPI } from './api/api';

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.availableTimes; // Update the available times with the payload
    default:
      return state;
  }
};

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
};

export const updateTimes = (dispatch, date) => {
  try {
    const availableTimes = fetchAPI(new Date(date));
    dispatch({ type: 'UPDATE_TIMES', availableTimes });
  } catch (error) {
    console.error('Failed to fetch available times', error);
  }
};

const App = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  useEffect(() => {
    const fetchInitialTimes = () => {
      const times = fetchAPI(new Date());
      dispatch({ type: 'UPDATE_TIMES', availableTimes: times });
    };

    fetchInitialTimes();
  }, []);

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
