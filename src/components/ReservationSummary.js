import React from 'react';

const ReservationSummary = ({ selectedMovie, selectedSeats }) => {
  return (
    <div>
      <h2>Reservation Summary</h2>
      <p>{selectedMovie ? `Movie: ${selectedMovie.title}` : null}</p>
      <p>
        {selectedSeats.length > 0
          ? `Selected Seats: ${selectedSeats.join(', ')}`
          : 'No seats selected'}
      </p>
      {/* Add more reservation details and confirm button */}
    </div>
  );
};

export default ReservationSummary;
