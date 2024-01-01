import React from 'react';

const SeatSelection = ({ selectedMovie, selectedSeats }) => {
  return (
    <div>
      <h2>Seat Selection</h2>
      <p>{selectedMovie ? `Selected Movie: ${selectedMovie.title}` : null}</p>
      <p>
        {selectedSeats.length > 0
          ? `Selected Seats: ${selectedSeats.join(', ')}`
          : 'No seats selected'}
      </p>
      {/* Implement seat selection UI here */}
    </div>
  );
};

export default SeatSelection;
