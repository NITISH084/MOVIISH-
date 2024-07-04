import axios from "axios";
import { useEffect } from "react";
import { options } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setmoviesearch } from "../Redux/movieSlice";

const useFilterMovies = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.movie.region) || '';
  const genre = useSelector((state) => state.movie.genre) || '';
  const popularity = useSelector((state) => state.movie.popularity) || 'popularity.desc';
  const page = useSelector((state) => state.movie.page) || 1;
  const year =useSelector((state)=>state.movie.year)

  useEffect(() => {
    if(!year ) return
    const fetchMovie = async () => {
      try {

        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${page}&with_origin_country=${region}&sort_by=${popularity}&with_genres=${genre}`,
          options
        );
        console.log(res);
        dispatch(setmoviesearch(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [genre, page, popularity,year, region]);
};

export default useFilterMovies;
