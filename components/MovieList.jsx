import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          return <img src="/images/NoHardFeelings.jpg" alt="NoHardFeelings" />
          <h3>{movie.title}</h3>

        </div>
      ))}
    </div>
  );
};

export default MovieList;
