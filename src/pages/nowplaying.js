// pages/nowplaying.js
import React from 'react';
import MovieList from 'components/MovieList'; // Sesuaikan dengan lokasi komponen MovieList

const NowPlaying = () => {
  // Di sini, Anda perlu mendapatkan daftar film yang sedang tayang.
  // Misalnya, Anda bisa mendapatkan daftar film ini dari API atau sumber data lainnya.

  const nowPlayingMovies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Deskripsi film 1',
      poster: 'link_ke_gambar_poster1.jpg',
    },
    // Tambahkan film-film lainnya di sini.
  ];

  return (
    <div>
      <h2>Now Playing</h2>
      <MovieList movies={nowPlayingMovies} />
    </div>
  );
};

export default NowPlaying;
