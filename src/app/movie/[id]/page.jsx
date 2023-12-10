import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}


export default async function page({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    

    <div className="max-w-6xl mx-auto h-fit mt-3 opacity-95" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${
      movie.backdrop_path || movie.poster_path
    })`, backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h1 className="text-lg mb-3 font-bold text-white">
            {movie.title || movie.name}
          </h1>
          <p className="text-lg mb-3 text-white ">
            <span className="font-semibold mr-1 text-blue-400">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3 text-white">
            <span className="font-semibold mr-1 text-blue-400">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3 text-white">
            <span className="font-semibold mr-1 text-blue-400">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}
