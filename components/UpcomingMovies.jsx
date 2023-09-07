import React from 'react';
import MovieList from './MovieList'; // Pastikan path-nya sesuai dengan struktur folder Anda

const UpcomingMovies = ({ upcomingMovies }) => {
  return (
    <div>
      <h2 className="text-1xl">Upcoming Movies</h2>
      <MovieList movies={upcomingMovies} />
    </div>
  );
};

export default UpcomingMovies;
