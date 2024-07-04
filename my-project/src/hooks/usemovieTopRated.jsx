import axios from "axios";
import { movietoprated_url, options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { setmovieTopRated } from "../Redux/dataSlice";
import { useEffect } from "react";
const usemovieTopRated =() => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieTopRated = async () => {
      try {
        const res = await axios.get(movietoprated_url, options);
        dispatch(setmovieTopRated(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    movieTopRated();
  }, [dispatch]);
};
export default usemovieTopRated;
