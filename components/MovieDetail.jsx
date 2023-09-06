// Contoh penggunaan komponen MovieDetail di dalam halaman Next.js
import React from 'react';
import MovieDetail from '../components/MovieDetail'; // Sesuaikan dengan jalur yang benar

const MovieDetailPage = () => {
  // Anda perlu mendapatkan data film dari API atau sumber lainnya
  const movie = {
    title: 'Judul Film',
    ageRating: '13+',
    imageUrl: 'https://example.com/image.jpg',
  };

  return (
    <div>
      <h2>Movie Detail Page</h2>
      <MovieDetail movie={movie} />
    </div>
  );
};

export default MovieDetailPage;
