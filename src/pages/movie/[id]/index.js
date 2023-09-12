import { server } from "../../../../config";
import axios from "axios";
import Image from "next/image";
import Meta from "../../../../components/Meta";

const Movie = ({movie}) => {
    console.log(movie);
    return(
      <div className="container max-w-4xl mx-auto pt-6">
        <Meta title={movie.title}/>
        <div className="px-3">
          <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={900} height={500} className="rounded-md"/>
          <h1 className="font-bold text-3xl my-2">{movie.title}</h1>
          <p className="text-black-600 text-sm mt-4">{movie.overview}</p>
          <p className="mt-5 text-black-600 text-sm">Genres: <span className="font-bold">{movie.genres.map(genre => genre.name).join(',')}</span></p>
          <p className="text-black-600 text-sm mt-2 mb-10">Release Date: <span className="font-bold">{movie.release_date}</span></p>
        </div>
      </div>
    )
};

export async function getStaticProps(context) {
  const{id} = context.params;
      const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
      const movie = res.data;
  
      return {
        props: { movie }
      };
    };

export async function getStaticPaths() {
    const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const movie = res.data.results;

const ids = movie.map(movie=> movie.id );
const paths = ids.map(id => ({params: {id: id.toString()}}));


    return {
      paths,
      fallback: false
    };
  };

export default Movie;