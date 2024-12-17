import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, updateTimes }) => {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    if (date) {
      updateTimes(date);
    }
  }, [date, updateTimes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Date:', date);
    console.log('Booking Time:', time);
    console.log('Number of Guests:', guests);
    console.log('Occasion:', occasion);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
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

      <input type="submit" value="Make Your Reservation" style={submitButtonStyle} />
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

const labelStyle = {
  marginBottom: '8px',
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
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0',
  fontWeight: 'bold',
};

export default BookingForm;
