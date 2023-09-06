// components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src="/images/The nun.jpg" alt="The Nun" />
      <h3>{movie.title}</h3>
      <p>{movie.ageRating}</p>
    </div>
  );
};

export default MovieCard;
