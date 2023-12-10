import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({result}) {
  return (
    <div className="cursor-pointer bg-blue-400 0 sm:p-3  sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2   hover:scale-105 transition-scale duration-300 ease-in-out group">
    <Link href={`/movie/${result.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          result.backdrop_path || result.poster_path
        }`}
        width={500}
        height={500}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="image is not available"
      ></Image>
      <div className="p-2">
         <h2 className="truncate text-lg font-bold text-slate-600">
          {result.title || result.name}
        </h2>
        <p className="line-clamp-3 text-md text-white pb-1">{result.overview}</p>
       
        <div className="flex items-center justify-around">
          <p>{result.release_date || result.first_air_date}</p>
          <p className="flex items-center gap-2"><FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}</p>
          
          
        </div>
      </div>
    </Link>
  </div>
  )
}
