import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ setSelectedMovie }) => {
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    // Add more movies as needed
  ];

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movie/${movie.id}`}
              onClick={() => setSelectedMovie(movie)}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
