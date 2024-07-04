import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSelectedCardURL } from "../Redux/userSlice";
import { options } from "../../utils/constant";

const useSelectedCardVideo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.selectedcard);
  const selected = useSelector((state) => state.user.selected);
  const mediatype = useSelector((state) => state.user.selectedcardmedia);

  useEffect(() => {
    const fetchVideoUrls = async () => {
      try {
        if (mediatype === null || data === null) {
          return;
        }
        if (mediatype === "movie") {
          // Fetch movie videos
          const movieRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${data}/videos`,
            options
          );
     
          if (movieRes.status === 200 && movieRes.data.results.length > 0) {
            let video = movieRes.data.results.find(
              (video) =>
                video.name.includes("Launch Trailer") ||
                video.name.includes("Official Trailer") ||
                video.name.includes("Final Trailer") ||
                video.name.includes("Trailer")
            );

            if (!video) {
              video = movieRes.data.results.find(
                (video) =>
                  video.name.includes("Teaser") ||
                  video.type === "Trailer" ||
                  video.type ==="Featurette"||
                  video.type === "Teaser"
              );
            }

            if (!video) {
              video = movieRes.data.results.find(
                (video) =>
                  video.site === "YouTube" || video.name.includes("clip")
              );
            }

            if (video) {
              dispatch(setSelectedCardURL(video.key));
              return; // Exit the function if a movie video is found
            }
          }
        } else if (mediatype === "tv") {
          // Fetch TV show videos
          const tvRes = await axios.get(
            `https://api.themoviedb.org/3/tv/${data}/videos`,
            options
          );
         
          if (tvRes.status === 200 && tvRes.data.results.length > 0) {
            let video = tvRes.data.results.find(
              (video) =>
                video.name.includes("Launch Trailer") ||
                video.name.includes("Official Trailer") ||
                video.name.includes("Final Trailer") ||
                video.name.includes("Trailer")
            );

            if (!video) {
              video = tvRes.data.results.find(
                (video) =>
                  video.name.includes("Teaser") ||
                  video.type === "Trailer" ||
                  video.type ==="Featurette"||
                  video.type === "Teaser"
              );
            }

            if (!video) {
              video = tvRes.data.results.find(
                (video) =>
                  video.site === "YouTube" || video.name.includes("clip")
              );
            }

            if (video) {
              dispatch(setSelectedCardURL(video.key));
              return; // Exit the function if a TV show video is found
            }
          }
        } else {
          if (mediatype === "original_title") {
            const movieRes = await axios.get(
              `https://api.themoviedb.org/3/movie/${data}/videos`,
              options
            );
          

            if (movieRes.status === 200 && movieRes.data.results.length > 0) {
              let video = movieRes.data.results.find(
                (video) =>
                  video.name.includes("Launch Trailer") ||
                  video.name.includes("Official Trailer") ||
                  video.name.includes("Final Trailer") ||
                  video.name.includes("Trailer")
              );

              if (!video) {
                video = movieRes.data.results.find(
                  (video) =>
                    video.name.includes("Teaser") ||
                    video.type === "Trailer" ||
                    video.type ==="Featurette"||
 video.type ==="Teaser"
                );
              }

              if (!video) {
                video = movieRes.data.results.find(
                  (video) =>
                    video.site === "YouTube" || video.name.includes("clip")
                );
              }

              if (video) {
                dispatch(setSelectedCardURL(video.key));
                return; // Exit the function if a movie video is found
              }
            }
          } else if (mediatype === "original_name") {
            const tvRes = await axios.get(
              `https://api.themoviedb.org/3/tv/${data}/videos`,
              options
            );
            

            if (tvRes.status === 200 && tvRes.data.results.length > 0) {
              let video = tvRes.data.results.find(
                (video) =>
                  video.name.includes("Launch Trailer") ||
                  video.name.includes("Official Trailer") ||
                  video.name.includes("Final Trailer") ||
                  video.name.includes("Trailer")
              );

              if (!video) {
                video = tvRes.data.results.find(
                  (video) =>
                    video.name.includes("Teaser") ||
                    video.type === "Trailer" ||
                    video.type ==="Featurette"||
                    video.type === "Teaser"
                );
              }

              if (!video) {
                video = tvRes.data.results.find(
                  (video) =>
                    video.site === "YouTube" || video.name.includes("clip")
                );
              }

              if (video) {
                dispatch(setSelectedCardURL(video.key));
                return; // Exit the function if a TV show video is found
              }
            }
          }
        }
      } catch (error) {
        console.error("Error fetching video URLs:", error);
      }
    };

    fetchVideoUrls();
  }, [data, dispatch, selected, mediatype]);
};

export default useSelectedCardVideo;
