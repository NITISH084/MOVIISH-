import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setSimilar } from "../Redux/browseSlice";
import { options } from "../../utils/constant";
import axios from "axios";

const useSimilar = () => {
    const dispatch = useDispatch();
    const watchmore = useSelector((state)=>state.userfunctionalities.watchmore);
    const moviepage = useSelector((state) => state.movie.moviepage);
    const tvpage = useSelector((state) => state.tv.tvpage);
    const count = useSelector((state) => state.userfunctionalities?.count);
    const selectedcard = useSelector((state) => state.user.selectedcard);

   // Determine the appropriate data source based on page type
  const data = useSelector((state) => {
    if (selectedcard) return state.user;
    if (!moviepage && !tvpage) return state.data.movieCurrently;
    return moviepage ? state.movie.movieTrending : state.tv.tvTrending;
  });

  const media_type = useSelector((state) => {
    if (selectedcard) return state.user.selectedcardmedia;
    if (!moviepage && !tvpage) return 'movie';
    return moviepage ? 'movie' : 'tv';
  });
    useEffect(()=>{
      if (!watchmore) return;

      const fetchSimilar = async () => {
        try {
          let movie_id;
          if (data && selectedcard) {
            movie_id = data.selectedcard;
          } else if (data && data.length > 0 && count < data.length) {
            movie_id = data[count].id;
          }
  
          if (movie_id) {
            const res = await axios.get(
              `https://api.themoviedb.org/3/${media_type}/${movie_id}/similar`,
              options
            );
            console.log(res);
          dispatch(setSimilar(res.data.results)); // Dispatch the recommendations to the store
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSimilar()
}, [data, count, watchmore, selectedcard, media_type, dispatch]); // Add dependencies

// The hook doesn't return any JSX
};

export default useSimilar;