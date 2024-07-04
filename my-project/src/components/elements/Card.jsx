import { endpoint_api, tmdb_url } from "../../../utils/constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaPlus } from "react-icons/fa";
import {
  setSelected,
  setSelectedCard,
  setSelectedCardMedia,
} from "../../Redux/userSlice";

import { MdAdd } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import {
  setContext,
  setOverview,
  setPoster,
  setTitle,
} from "../../Redux/contextSlice";
import { setWatchMore } from "../../Redux/browseSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { SiNike } from "react-icons/si";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.refresh(); // Refresh AOS to apply animations
  }, [data]); // Refresh AOS whenever `data` changes

  let get_url = data.poster_path || data.backdrop_path;
  if (!get_url && data.known_for && data.known_for.length > 0) {
    get_url = data.known_for[0].poster_path || data.known_for[0].backdrop_path;
  }
  const img_url = get_url ? `${tmdb_url}${get_url}` : ""; // Handle the case when get_url is still undefined
  const mediaType = data.media_type || (data.original_name ? "tv" : "movie");
  const card_id = data.id;
  const user = useSelector((state) => state.user.userData?._id);
  const mylist = useSelector((state) => state.userfunctionalities.mylist);
  const cardfound = mylist && mylist.some((list) => list.card_id === card_id);

  const handleAddToList = async (e) => {
    e.stopPropagation();
    try {
      const res = await axios.post(
        `${endpoint_api}/mylist`,
        { user, card_id, img_url, mediaType },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log("Error in giving input for mycard", error);
    }
    navigate("/browse/Mylist");
  };

  const handleCardClick = () => {
    dispatch(setSelectedCard(data.id));
    dispatch(setSelected(true));
    dispatch(setSelectedCardMedia(mediaType));
    dispatch(setPoster(img_url));
    dispatch(setContext(data));
    dispatch(setOverview(data.overview));
    dispatch(setTitle(data.original_name || data.original_title));
    dispatch(setWatchMore(true));
    navigate("/browse/Content");
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedCard(data.id));
    dispatch(setSelected(true));
    dispatch(setSelectedCardMedia(mediaType));
    dispatch(setPoster(img_url));
    dispatch(setContext(data));
    dispatch(setOverview(data.overview));
    dispatch(setTitle(data.original_name || data.original_title));
    navigate("/browse/Player");
  };

  return (
    <div className="relative w-36 lg:w-48 pr-4 mb-6 hover:scale-110 transition-transform duration-300 ease-in-out">
      {img_url ? (
        <>
          <img
            data-aos="fade-down"
            className="rounded-[5px] object-cover h-full w-full "
            src={img_url}
            alt="img"
          />
          <div
            className="flex flex-col justify-center items-center absolute inset-0 space-y-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out m-0 hover:bg-custom-gradient4 rounded-[5px] object-cover h-full w-32 lg:w-44"
            onClick={handleCardClick}
          >
            <button type="button">
              <FaPlay
                data-aos="fade-down"
                className="text-2xl text-red-600 transition-colors duration-300 ease-in-out cursor-pointer"
                onClick={handlePlayClick}
              />
            </button>
            <button type="button">
              {cardfound ? (
                <FaCheck
                  data-aos="fade-down"
                  className="text-2xl text-green-500 transition-colors duration-300 ease-in-out cursor-pointer"
                />
              ) : (
                <FaPlus
                  data-aos="fade-down"
                  className="text-2xl text-green-500 transition-colors duration-300 ease-in-out cursor-pointer"
                  onClick={handleAddToList}
                />
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            data-aos="fade-down"
            className="rounded-[5px] object-cover h-full w-full"
            src="https://placehold.co/600x900"
            alt="placeholder"
          />
          <div className="flex flex-col justify-end items-end absolute inset-0 space-y-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out m-6">
            <button type="button">
              <FaPlay
                data-aos="fade-down"
                className="text-2xl text-red-600 transition-colors duration-300 ease-in-out cursor-pointer"
              />
            </button>
            <button type="button">
              <MdAdd
                data-aos="fade-down"
                className="text-3xl text-green-500 transition-colors duration-300 ease-in-out cursor-pointer"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
