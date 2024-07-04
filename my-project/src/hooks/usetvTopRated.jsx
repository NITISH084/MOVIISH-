import axios from "axios";
import { options, tvtoprated_url } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { settvTopRated } from "../Redux/dataSlice";
import { useEffect } from "react";
const usetvTopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentlytvTopRated = async () => {
      try {
        const res = await axios.get(tvtoprated_url, options);
        dispatch(settvTopRated(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    currentlytvTopRated();
  }, [dispatch]);
};
export default usetvTopRated;
