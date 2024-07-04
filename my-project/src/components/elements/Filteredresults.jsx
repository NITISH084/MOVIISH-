import { useSelector } from "react-redux";
import Card from "./Card";

const Filteredresults = () => {
  const moviepage = useSelector((state) => state.movie.moviepage);
  const tvpage = useSelector((state) => state.tv.tvpage);
  const moviesearch = useSelector((state) => state.movie.moviesearch);
  const tvsearch = useSelector((state) => state.tv.tvsearch);

  return (
    <div className="bg-black px-8">
      {moviepage && moviesearch && (
        <>
          <p className="text-3xl text-white font-semibold py-3">Filtered Movies</p>
          <div className="flex overflow-y-hidden no-scollbar overflow-x-scroll w-full gap-3">
            <div className="flex items-center space-x-4">
              {moviesearch.map((movie) => (
                <Card key={movie.id} data={movie} />
              ))}
            </div>
          </div>
        </>
      )}
      {tvpage && tvsearch && (
        <>
          <p className="text-3xl text-white font-semibold py-3">Filtered TV series</p>
          <div className="flex overflow-y-hidden no-scrollbar overflow-x-scroll w-full gap-3">
            <div className="flex items-center space-x-4">
              {tvsearch.map((tv) => (
                <Card key={tv.id} data={tv} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Filteredresults;
