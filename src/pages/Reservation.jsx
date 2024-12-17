import React, { useState } from 'react';

const BookingForm = () => {
  // Define state for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, like sending data to an API
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

// CSS styles (without color) with added space at the bottom
const formStyle = {
  display: 'grid',
  maxWidth: '300px',
  gap: '20px',
  margin: '0 auto', // Centering the form
  padding: '20px',
  border: '1px solid #ccc', // Border around the form
  borderRadius: '8px', // Rounded corners
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
  marginBottom: '40px', // Adds extra space at the bottom of the form
};

const labelStyle = {
  fontWeight: 'bold',
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
