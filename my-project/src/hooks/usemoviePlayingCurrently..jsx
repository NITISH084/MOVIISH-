import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { moviecurrently_url, options } from "../../utils/constant";
import { setmovieCurrently } from "../Redux/dataSlice";

const usemoviePlayingCurrently = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await axios.get(moviecurrently_url, options);
        dispatch(setmovieCurrently(response.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentlyPlaying();
  }, [dispatch]);
};

export default usemoviePlayingCurrently;
