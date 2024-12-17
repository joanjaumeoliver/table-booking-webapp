import { render, screen } from "@testing-library/react";
import BookingForm from '../pages/Reservation';

test('Renders the BookingForm static text', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  render(<BookingForm availableTimes={mockAvailableTimes} />);

  // Check if the static text "Choose date" is present in the BookingForm
  const dateLabelElement = screen.getByText(/Choose date/i);
  expect(dateLabelElement).toBeInTheDocument();
});