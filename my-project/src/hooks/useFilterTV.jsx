import axios from "axios";
import { useEffect } from "react";
import { options } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { settvsearch } from "../Redux/tvSlice";

const useFilterTV = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.tv.region) || '';
  const genre = useSelector((state) => state.tv.genre) || '';
  const popularity = useSelector((state) => state.tv.popularity) || 'popularity.desc';
  const page = useSelector((state) => state.tv.page) || 1;

  const year =useSelector((state)=>state.tv.year)

  
  
  useEffect(() => {
    if(!year) return
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=${page}&with_origin_country=${region}&sort_by=${popularity}&with_genres=${genre}`,
          options
        );
        console.log(res);
        dispatch(settvsearch(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [genre, page, popularity, region,year, dispatch]);
};

export default useFilterTV;
