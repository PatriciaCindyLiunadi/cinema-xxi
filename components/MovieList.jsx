import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
           <img src="/images/Thenun.jpg" alt="NoHardFeelings" />
          <h3>{movie.title}</h3>

        </div>
      ))}
    </div>
  );
};

export default MovieList;
