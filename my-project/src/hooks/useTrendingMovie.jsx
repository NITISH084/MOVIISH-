import axios from "axios";
import { useEffect } from "react";
import { options, trendingMovie_url } from "../../utils/constant";
import { setmovieTrending } from "../Redux/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        const res = await axios.get(trendingMovie_url, options);
        dispatch(setmovieTrending(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovie();
  }, [dispatch]);
};
export default useTrendingMovie;
