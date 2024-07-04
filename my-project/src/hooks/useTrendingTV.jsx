import axios from "axios";
import { useEffect } from "react";
import { options, trendingTv_url } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { settvTrending } from "../Redux/tvSlice"

const useTrendingTV = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTrendingTv = async () => {
      try {
        const res = await axios.get(trendingTv_url, options);
        dispatch(settvTrending(res.data.results))
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingTv();
  }, [dispatch]);
};
export default useTrendingTV;
