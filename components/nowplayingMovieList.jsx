// Contoh penggunaan komponen MovieList di dalam halaman Next.js
import React from 'react';
import MovieList from './nowplayingMovieList'; // Sesuaikan dengan jalur yang benar

const NowPlayingPage = () => {
  return (
    <div>
      <h2>Now Playing Page</h2>
      <MovieList />
    </div>
  );
};

export default NowPlayingPage;
