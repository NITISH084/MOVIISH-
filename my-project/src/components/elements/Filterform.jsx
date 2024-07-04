import { useEffect, useState } from "react";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  setgenremovie,
  setpopularitymovie,
  setpagemovie,
  setregionmovie,
  setmoviesearch,
  setyearmovie,
} from "../../Redux/movieSlice";
import {
  setgenretv,
  setpopularitytv,
  setpagetv,
  setregiontv,
  settvsearch,
  setyeartv,
} from "../../Redux/tvSlice";
import useFilterMovies from "../../hooks/useFilterMovies";
import useFilterTV from "../../hooks/useFilterTV";

const Filterform = () => {
  const dispatch = useDispatch();
  const moviepage = useSelector((state) => state.movie.moviepage);
  const tvpage = useSelector((state) => state.tv.tvpage);

  const [genre, setGenre] = useState(null);
  const [popularity, setPopularity] = useState(null);
  const [page, setPage] = useState(null);
  const [region, setRegion] = useState(null);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moviepage) {
      dispatch(setgenremovie(genre));
      dispatch(setpopularitymovie(popularity));
      dispatch(setpagemovie(page));
      dispatch(setregionmovie(region));
      dispatch(setyearmovie("YES"));
    } else if (tvpage) {
      dispatch(setgenretv(genre));
      dispatch(setpopularitytv(popularity));
      dispatch(setpagetv(page));
      dispatch(setregiontv(region));
      dispatch(setyeartv("YES"));
    }
  };

  useFilterMovies();
  useFilterTV();

  useEffect(() => {
    if (moviepage) {
      dispatch(settvsearch(null));
      dispatch(setgenretv(null));
      dispatch(setpopularitytv(null));
      dispatch(setregiontv(null));
      dispatch(setpagetv(null));
      dispatch(setyeartv(null));
    } else {
      dispatch(setmoviesearch(null));
      dispatch(setgenremovie(null));
      dispatch(setregionmovie(null));
      dispatch(setpopularitymovie(null));
      dispatch(setpagemovie(null));
      dispatch(setyearmovie(null));
    }
  }, [moviepage, tvpage, dispatch]);

  const genreListMovie = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  const genreListTV = [
    { id: 10759, name: "Action & Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 10762, name: "Kids" },
    { id: 9648, name: "Mystery" },
    { id: 10763, name: "News" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Sci-Fi & Fantasy" },
    { id: 10766, name: "Soap" },
    { id: 10767, name: "Talk" },
    { id: 10768, name: "War & Politics" },
    { id: 37, name: "Western" },
  ];

  const sortbymovie = [
    { name: "popularity.asc" },
    { name: "popularity.desc" },
    { name: "revenue.asc" },
    { name: "revenue.desc" },
    { name: "original_title.asc" },
    { name: "vote_average.asc" },
    { name: "vote_average.desc" },
  ];
  const sortbytv = [
    { name: "popularity.asc" },
    { name: "popularity.desc" },
    { name: "first_air_date.asc" },
    { name: "first_air_date.desc" },
    { name: "original_name.asc" },
    { name: "vote_average.asc" },
    { name: "vote_average.desc" },
  ];

  const genreList = moviepage ? genreListMovie : genreListTV;
  const sortby = moviepage ? sortbymovie : sortbytv;

  const selectedGenre = genreList.find((g) => g.id === genre)?.name || "Genres";
  const selectedsortby =
    sortby.find((s) => s.name === popularity)?.name || " Sort by ";

  return (
    <div className="bg-black px-8 md:px-6 md:p-4 flex flex-col md:justify-center md:items-center font-playfair">
      <form className="flex flex-col md:gap-3" onSubmit={handleSubmit}>
        <label className="text-white md:text-3xl">
          Browse {moviepage ? "Movies" : "TV series"} using the following
          filters:
        </label>
        <div className="flex  md:gap-3 md:flex-row flex-col relative">
          <details
            className="text-white py-1 rounded-[5px] my-4 mx-2 border border-white bg-black  p-[7px] md:w-48 
            line-clamp-4 overflow-y-scroll scrollbar-hide relative text-center"
            onClick={() => {
              setExpand1(!expand1);
            }}
          >
            <summary className="text-white list-none md:text-xl cursor-pointer flex gap-6 justify-center items-center  sticky top-0 left-16  z-10 bg-black m-0 px-2  ">
              {selectedGenre}{" "}
              {!expand1 ? <MdExpandMore /> : <MdOutlineExpandLess />}
            </summary>
            <ul className="text-gray-400 ">
              {genreList.map((g) => (
                <li
                  key={g.id}
                  className="hover:text- cursor-pointer hover:bg-stone-900 bg-gray-800 px-5 p-1"
                  onClick={() => setGenre(g.id)}
                >
                  {g.name}
                </li>
              ))}
            </ul>
          </details>
          <input
            type="number"
            placeholder="page no."
            value={page || ""}
            onChange={(e) => setPage(e.target.value)}
            className="py-1 rounded-[5px] my-4 mx-2 bg-[#000000b5] border md:text-lg border-white text-white p-[5px] md:h-[41.6px] md:w-auto  "
          />
          <button
            className="bg-gray-600 text-white font-semibold md:text-lg p-[18px] py-1 rounded-[5px] my-4 mx-2 hover:bg-[#e50914] focus:outline-none focus:ring md:h-[41.6px]"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap md:gap-3 relative">
          <details
            className="text-white py-1 rounded-[5px] my-4 mx-2 bg-[#000000b5] border border-white  p-[7px] md:w-48 line-clamp-4 overflow-y-scroll scrollbar-hide"
            onClick={() => {
              setExpand2(!expand2);
            }}
          >
            <summary className="text-white list-none md:text-xl cursor-pointer flex gap-6 justify-center items-center  sticky top-0 left-16  z-10 bg-black m-0 px-2 ">
              {selectedsortby}{" "}
              {!expand2 ? <MdExpandMore /> : <MdOutlineExpandLess />}
            </summary>
            <ul className="text-gray-400">
              {sortby.map((s) => (
                <li
                  key={s.name}
                  className="hover:text- cursor-pointer hover:bg-stone-900 px-5 p-1"
                  onClick={() => setPopularity(s.name)}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </details>
          
          <input
            type="text"
            placeholder="region"
            value={region || ""}
            onChange={(e) => setRegion(e.target.value)}
            className="py-1 rounded-[5px] my-4 mx-2 md:text-lg bg-[#000000b5] border border-white text-white p-[5px] md:h-[41.6px]"
          />

          <button
            className="bg-gray-200 text-red-900 p-[18px] py-1 font-bold text-lg rounded-[5px] my-4 mx-2 hover:bg-[#e50914] hover:text-white focus:outline-none focus:ring md:h-[41.6px]"
            type="button"
            onClick={() => {
              setGenre(null);
              setPopularity(null);
              setPage(null);
              setRegion(null);
              dispatch(setgenretv(null));
              dispatch(setpopularitytv(null));
              dispatch(setpagetv(null));
              dispatch(setregiontv(null));
              dispatch(setgenremovie(null));
              dispatch(setpopularitymovie(null));
              dispatch(setpagemovie(null));
              dispatch(setregionmovie(null));
              dispatch(setyearmovie(null));
              dispatch(setyeartv(null));
              moviepage
                ? dispatch(setmoviesearch(null))
                : dispatch(settvsearch(null));
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filterform;
