import React from 'react';
import MovieList from './MovieList';

const UpcomingMovies = ({ upcomingMovies }) => {
  return (
    <div>
      <h2 className="text-1xl">Upcoming Movies</h2>
      <MovieList movies={upcomingMovies} />
    </div>
  );
};

export default UpcomingMovies;
