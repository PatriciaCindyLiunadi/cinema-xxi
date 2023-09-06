import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src="/images/The nun.jpg" alt="The Nun" />
          <h3>{movie.title}</h3>
          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
