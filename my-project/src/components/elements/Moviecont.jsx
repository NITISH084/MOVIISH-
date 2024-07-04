import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import Tvlist from "./Tvlist";


const Moviecont = () => {
  const res = useSelector((state) => state.data);
  const movie = useSelector((state) => {
    return state.movie;
  });
  const moviepage = movie.moviepage;
  return (
    <>
      {moviepage && (
      <div className="bg-black">
        <div className=" z-10 lg:-mt-52 flex flex-col relative" >
          <Movielist title={"Currently Trending"} data={movie.movieTrending} />
        </div>
      </div>
      )}
     {!moviepage && 
      (<div className="bg-black" >
        <div className=" z-10 lg:-mt-52 flex flex-col relative"  >
          <Movielist title={"Now Playing"} data={res.movieCurrently} />
          <Movielist title={"Popular"} data={res.moviePopular} />
          <Movielist title={"Top Rated"} data={res.movieTopRated} />
          <Movielist title={"Upcoming"} data={res.movieUpcoming} />
          <Tvlist title={"Top Rated"} data={res.tvTopRated} />
          <Tvlist title={"Popular"} data={res.tvPopular} />
        </div>
      </div>)}
    </>
  );
};

export default Moviecont;
