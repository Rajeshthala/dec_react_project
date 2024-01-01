import React from 'react';

const MovieDetails = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <div>No movie selected</div>;
  }

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>Movie details go here</p>
    </div>
  );
};

export default MovieDetails;
