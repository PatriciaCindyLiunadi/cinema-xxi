
const Homepage = ({ nowPlayingMovies, upcomingMovies }) => {
    const allMovies = [...nowPlayingMovies, ...upcomingMovies];
  
    return (
      <div>
        <h2>Cinema XXI</h2>
        <div className="movie-container">
          {allMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.imageUrl} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.ageRating}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Homepage;
  