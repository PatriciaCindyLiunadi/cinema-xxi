import React from 'react';
import Link from 'next/link';
import UpcomingMovies from 'components/UpcomingMovies'; 

const upcomingMovies = [
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
    {
      id: 4,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },
    {
      id: 5,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },
    {
      id: 6,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },
    {
      id: 7,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },
    {
      id: 8,
      title: 'The Nun II',
      description: 'Deskripsi film 1',
      poster: 'The nun.jpg',
    },
  ];


const UpcomingPage = () => {
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
              placeholder="Cari film..."
              // Tambahkan logika pencarian di sini jika diperlukan
            />
            <button onClick={() => handleSearch()}>Cari</button>
          </div>
        </div>
      </header>
      <nav className="navigation bg-blue-500 text-white py-2 flex justify-between items-center">
        <ul className="main-menu flex space-x-4">
          <li><Link href="/nowplaying">Now Playing</Link></li>
          <li><Link href="/upcoming">Upcoming</Link></li>
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
        <UpcomingMovies upcomingMovies={upcomingMovies} />
      </main>
    </div>
  );
};

export default UpcomingPage;
