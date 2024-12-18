import React, { useState, useEffect } from 'react';
import { submitAPI } from '../api/api';
import { useNavigate } from 'react-router';

const BookingForm = ({ availableTimes, updateTimes }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const prevDateRef = React.useRef();

  useEffect(() => {
    if (date && date !== prevDateRef.current) {
      updateTimes(date);
      prevDateRef.current = date;
      setTime(availableTimes[0]);
    }
  }, [date, availableTimes, updateTimes]);

  useEffect(() => {
    const isValid =
      date &&
      time &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== '';
    setIsFormValid(isValid);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Date:', date);
    console.log('Booking Time:', time);
    console.log('Number of Guests:', guests);
    console.log('Occasion:', occasion);

    const result = submitAPI({ date, time, guests, occasion });

    if (result) {
      navigate('/confirmed-booking');
    } else {
      console.log('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={isFormValid ? formStyleValid : formStyle}>
      <label htmlFor="res-date" style={labelStyle}>Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={inputStyle}
      />
      <label htmlFor="res-time" style={labelStyle}>Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        style={inputStyle}
      >
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests" style={labelStyle}>Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
        style={inputStyle}
      />

      <label htmlFor="occasion" style={labelStyle}>Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        style={inputStyle}
      >
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        style={isFormValid ? submitButtonStyleValid : submitButtonStyle}
        disabled={!isFormValid} // Disable the button if the form is invalid
      />
    </form>
  );
};

const formStyle = {
  display: 'grid',
  maxWidth: '300px',
  gap: '20px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '40px',
};

const formStyleValid = {
  display: 'grid',
  maxWidth: '300px',
  gap: '20px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #F4CE14',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(128, 60, 0, 0.1)', // Green shadow for valid form
  marginBottom: '40px',
};

const labelStyle = {
  fontSize: '1.5rem',
  fontWeight: '500',
};

const inputStyle = {
  padding: '8px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '12px',
};

const submitButtonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '16px',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0',
  fontFamily: 'Markazi Text, serif',
  fontSize: '1.25rem',
  fontWeight: '400',
};

const submitButtonStyleValid = {
  padding: '10px 20px',
  fontSize: '1.25rem',
  fontWeight: '400',
  border: 'none',
  cursor: 'pointer',
  color: 'black',
  borderRadius: '16px',
  fontFamily: 'Markazi Text, serif',
  backgroundColor: '#F4CE14',
};

export default BookingForm;
