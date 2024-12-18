import { render, screen } from "@testing-library/react";
import BookingForm from '../pages/Reservation';
import { fetchAPI } from "../api/api";
import { BrowserRouter } from 'react-router';

test('Renders the BookingForm static text', () => {
  const mockAvailableTimes = fetchAPI(new Date());

  render(
    <BrowserRouter>
      <BookingForm availableTimes={mockAvailableTimes} />
    </BrowserRouter>
  );

  // Check if the static text "Choose date" is present in the BookingForm
  const dateLabelElement = screen.getByText(/Choose date/i);
  expect(dateLabelElement).toBeInTheDocument();
});

test('BookingForm has HTML5 validation attributes applied correctly', () => {
  const mockAvailableTimes = fetchAPI(new Date());

  render(
    <BrowserRouter>
      <BookingForm availableTimes={mockAvailableTimes} />
    </BrowserRouter>
  );

  // Check if the date input has required attribute
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('required');

  // Check if the time select has required attribute
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');

  // Check if the guests input has min attributes
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('required');

  // Check if the occasion select has required attribute
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});