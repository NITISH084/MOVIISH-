import axios from "axios";
import { movieupcoming_url, options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { setmovieUpcoming } from "../Redux/dataSlice";
import { useEffect } from "react";
const usemovieUpcoming =() => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieUpcoming = async () => {
      try {
        const res = await axios.get(movieupcoming_url, options);
        dispatch(setmovieUpcoming(res.data.results));
      } catch (error) {
        console.log(error);
      }
    }
    movieUpcoming();
  },[dispatch]);
};
export default usemovieUpcoming;
