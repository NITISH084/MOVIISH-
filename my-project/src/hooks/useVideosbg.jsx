import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../utils/constant";
import { useEffect, useMemo } from "react";
import { setvideourl } from "../Redux/dataSlice";

const useVideosbg = () => {
  const tvState = useSelector((state) => state.tv);
  const movieState = useSelector((state) => state.movie);
  const currentlyPlaying = useSelector((state) => state.data.movieCurrently);

  const collection = useMemo(() => {
    if (tvState.tvpage) {
      return tvState.tvTrending;
    } else if (movieState.moviepage) {
      return movieState.movieTrending;
    } else {
      return currentlyPlaying || [];
    }
  }, [tvState, movieState, currentlyPlaying]);

  const dispatch = useDispatch();

  const mediaType = useMemo(() => (tvState.tvpage ? "tv" : "movie"), [tvState]);

  useEffect(() => {
    const fetchVideourls = async () => {
      try {
        const videourls = await Promise.all(
          collection.map(async (item) => {
            const res = await axios.get(
              `https://api.themoviedb.org/3/${mediaType}/${item.id}/videos`,
              options
            );

            // Prioritize finding "Official Trailer" or "Final Trailer"
            let video = res.data.results.find(
              (video) =>
                video.name.includes("Official Trailer") ||
              video.name.includes("Launch Trailer") ||
                video.name.includes("Final Trailer")||
                video.name.includes("Trailer")
            );

            if (!video) {
              video = res.data.results.find(
                (video) =>
                  video.name.includes("Teaser") ||
                  video.type === "Trailer" ||
                  video.type ==="Featurette"||
                  video.type === "Teaser" 
              );
            }

            if(!video){
              video = res.data.results.find(
                (video) =>
                      video.site === "YouTube" ||
                      video.name.includes("clip")
                  );}


            return video ? video : null; // Return the video object or null if no match
          })
        );

        // Filter out null values before dispatching to avoid errors
        const filteredVideourls = videourls.filter((video) => video !== null);
        dispatch(setvideourl(filteredVideourls));
      } catch (error) {
        console.error("Error fetching video URLs:", error);
      }
    };

    if (collection && collection.length > 0) {
      fetchVideourls();
    }
  }, [collection, dispatch, mediaType]);
};

export default useVideosbg;
