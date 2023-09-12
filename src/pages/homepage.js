import Hero from 'components/Hero';
import axios from 'axios';
import { server } from "config";
import PopularMovie from "components/PopularMovie"; // Pindahkan impor ke atas

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className="bg-gray-200">
      <Hero />
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const movies = res.data;

    return {
      props: { movies },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { movies: [] },
    };
  }
}
