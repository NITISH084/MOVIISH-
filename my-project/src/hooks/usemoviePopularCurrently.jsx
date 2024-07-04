import axios from "axios";
import { moviepopular_url, options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { setmoviePopular } from "../Redux/dataSlice";
import { useEffect } from "react";
const usemoviePopularCurrently = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const popularCurrently = async () => {
      try {
        const res = await axios.get(moviepopular_url, options);
        dispatch(setmoviePopular(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    popularCurrently();
  }, [dispatch]);
};
export default usemoviePopularCurrently;
