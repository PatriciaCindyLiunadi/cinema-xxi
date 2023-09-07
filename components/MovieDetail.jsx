// pages/movie/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const movie = {
    title: 'Judul Film',
    ageRating: '13+', 
    imageUrl: 'https://example.com/image.jpg', 
    description: 'Deskripsi film yang panjang dan detail akan ditampilkan di sini.',
  };

  return (
    <div>
      <header className="header bg-blue-500 flex justify-between items-center">
        <div className="header-left">
          <h1>
            <Link href="/">Cinema XXI</Link>
          </h1>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Movie..."
              // Tambahkan logika pencarian di sini jika diperlukan
            />
            <button onClick={() => handleSearch()}>Cari</button>
          </div>
        </div>
      </header>
      <nav className="navigation bg-blue-500 text-white py-2 flex justify-between items-center">
        <ul className="main-menu flex space-x-4">
          <li>
            <Link href="/nowplaying">Now Playing</Link>
          </li>
          <li>
            <Link href="/upcoming">Upcoming</Link>
          </li>
          <li>Theaters</li>
          <li>Promotion</li>
          <li>Info21</li>
        </ul>
        <div className="flex space-x-2">
          <span>IMAX</span>
          <span>DOLBY ATMOS</span>
          <span>M-Tix</span>
        </div>
      </nav>
      <main>
        <h2 className="text-1xl">Movie Detail</h2>
        <div className="movie-detail">
          <img src={movie.imageUrl} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Age Rating: {movie.ageRating}</p>
          <p>{movie.description}</p>
        </div>
      </main>
    </div>
  );
};

export default MovieDetail;
