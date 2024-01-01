import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';
import ReservationSummary from './components/ReservationSummary';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
      <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            render={(props) => (
              <MovieList {...props} setSelectedMovie={setSelectedMovie} />
            )}
          />
          <Route
            path="/movie/:id"
            render={(props) => (
              <MovieDetails
                {...props}
                selectedMovie={selectedMovie}
                setSelectedSeats={setSelectedSeats}
              />
            )}
          />
          <Route
            path="/seat-selection"
            render={(props) => (
              <SeatSelection
                {...props}
                selectedMovie={selectedMovie}
                selectedSeats={selectedSeats}
              />
            )}
          />
          <Route
            path="/reservation-summary"
            render={(props) => (
              <ReservationSummary
                {...props}
                selectedMovie={selectedMovie}
                selectedSeats={selectedSeats}
              />
            )}
          />
        </Routes>
    </Router>
      </div>
  );
}

export default App;
