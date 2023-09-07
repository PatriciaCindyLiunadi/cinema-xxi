import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`/public/images/${movie.poster}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
