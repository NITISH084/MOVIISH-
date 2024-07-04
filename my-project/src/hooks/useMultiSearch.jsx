import axios from "axios";
import { useEffect } from "react";
import { options } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMultiSearch } from "../Redux/userSlice";
import toast from "react-hot-toast";

const useMultiSearch = () => {
  const inputsearch = useSelector((state) => state.user.inputsearch);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!inputsearch) return; // Avoid making a request with an empty query

    const search = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${inputsearch}&include_adult=false&language=en-US&page=1`, options);
        console.log("Search Results:", res.data.results);
        dispatch(setMultiSearch(res.data.results));
        if(res.data.results.length===0){
          toast("No result found")
        }
        else{
          toast(`${res.data.results.length} results found`)
        }
      } catch (error) {
        console.log(error);
      }
    };

    search();
  }, [inputsearch, dispatch]);
};

export default useMultiSearch;
