import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();

  const isMovieDetailPage = router.pathname.startsWith('/movie/');
  const isHomePage = router.pathname === '/homepage';

  const handleLogout = () => {
    // Lakukan tindakan logout di sini jika diperlukan

    // Redirect ke halaman indeks setelah logout
    router.push('/');
  };

  return (
    <nav className="bg-emerald-700">
      <div className="flex justify-between items-center font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        {isMovieDetailPage || isHomePage ? (
          <Link href="/homepage">
            <span className="text-base md:text-2xl cursor-pointer">
              Cinema
              <span className="text-red-600">XXI</span>
            </span>
          </Link>
        ) : (
          <span className="text-base md:text-2xl">
            Cinema
            <span className="text-red-600">XXI</span>
          </span>
        )}

        {/* Tampilkan tombol Logout hanya jika bukan halaman indeks */}
        {isHomePage || isMovieDetailPage ? (
          <button
            onClick={handleLogout}
            className="text-base md:text-1xl cursor-pointer text-red-600 hover:underline"
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
