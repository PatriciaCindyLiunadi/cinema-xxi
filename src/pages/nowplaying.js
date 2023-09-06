import React from 'react';
import Link from 'next/link';
import MovieCard from 'components/MovieCard'; // Sesuaikan dengan jalur yang benar

const NowPlaying = () => {
  // Di sini, Anda perlu mendapatkan daftar film yang sedang tayang.
  // Misalnya, Anda bisa mendapatkan daftar film ini dari API atau sumber data lainnya.

  const nowPlayingMovies = [
    {
      id: 1,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },    
    {
      id: 2,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },
    {
      id: 3,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },
  ];

  const renderMovieCards = () => {
    return nowPlayingMovies.map((movie) => (
      <div key={movie.id} className="movie-card">
        <MovieCard movie={movie} />
      </div>
    ));
  };

  return (
    <div>
      <header className="header bg-blue-500 flex justify-between items-center"> {/* Menggunakan kelas Tailwind CSS untuk warna biru dan flex */}
        <div className="header-left">
          <h1>
            <Link href="/">Cinema XXI</Link>
          </h1>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Cari film..."
              // Tambahkan logika pencarian di sini jika diperlukan
            />
            <button onClick={() => handleSearch()}>Cari</button>
          </div>
        </div>
      </header>
      <div className="header-bottom bg-blue-500"> {/* Menggunakan kelas Tailwind CSS untuk warna biru */}
        <ul className="main-menu flex space-x-4 text-white"> {/* Menggunakan kelas Tailwind CSS untuk flex dan ruang antara item */}
          <li><Link href="/nowplaying">Now Playing</Link></li>
          <li><Link href="/upcoming">Upcoming</Link></li>
          <li>Theaters</li>
          <li>Promotion</li>
          <li>Info21</li>
          <li>IMAX</li>
          <li>DOLBY ATMOS</li>
          <li>M-Tix</li>
        </ul>
      </div>
      <main>
        <h2 className="text-1xl">Now Playing</h2> {/* Menggunakan kelas Tailwind CSS */}
        <div className="grid grid-cols-4 gap-4"> {/* Menggunakan kelas Tailwind CSS */}
          {renderMovieCards()}
        </div>
      </main>
    </div>
  );
};

export default NowPlaying;
