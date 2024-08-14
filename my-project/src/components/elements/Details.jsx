import { useSelector } from "react-redux";
import { FaPlus, FaPlay, FaCheck } from "react-icons/fa";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useCredits from "../../hooks/useCredits";
import dayjs from "dayjs";
import useSelectedCardVideo from "../../hooks/useSelectedCardVideo";
import useDetails from "../../hooks/useDetails";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { endpoint_api } from "../../../utils/constant";
import axios from "axios";
import Ratings from "./Ratings";

const Details = () => {
  useCredits();
  useDetails();
  useSelectedCardVideo();
  const scrollToRef = useRef(null);
  const mylist = useSelector((state) => state.userfunctionalities.mylist);
  const poster = useSelector((state) => state.context?.poster);
  const overview =
    useSelector((state) => state.context?.details?.overview) || {};
  const context = useSelector((state) => state.context?.context) || {};
  const credits = useSelector((state) => state.context?.credits) || {};
  const details = useSelector((state) => state.context?.details) || {};
  const cardfound =
    mylist && mylist.some((list) => list.card_id === details.id);
  let user = useSelector((state) => state.user?.userData?._id);
  let card_id = context.id;
  let img_url = poster;
  let mediaType = useSelector((state) => state.user.selectedcardmedia);
  dayjs().format();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the element referenced by scrollToRef
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [credits]);

  const text1 = cardfound ? "Added to List" : "Add to List";

  console.log(cardfound);
  const handleAddToList = async () => {
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
      console.log("Error in adding to mylist", error);
    }
    navigate("/browse/Mylist");
  };
  return (
    <div
      className="flex bg-no-repeat relative bg-cover bg-center md:flex-row flex-col"
      style={{ backgroundImage: `url(${poster})` }}
      ref={scrollToRef}
    >
      <div className="absolute inset-0 filter bg-custom-gradient1"></div>
      <div className="absolute inset-0 filter backdrop-blur-lg"></div>
      <div className="relative md:h-[85vh] md:w-[70vw]">
        <button
          type="button"
          className="mt-2 ml-0 text-[30px] hover:scale-110 transition-transform ease-in-out"
          onClick={() => navigate("/browse")}
        >
          <IoChevronBackCircleSharp className="invert" />
        </button>
        <div className="relative flex inset-0">
          <div className="flex md:mt-28 px-4 mb-5 md:flex-row flex-col md:gap-3">
            <div className="flex md:space-x-7 space-x-3">
              <div className="md:w-[30%] w-[40%] h-auto">
                <img
                  src={poster}
                  alt="poster"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col md:space-y-10 space-y-8 md:w-[70%] w-[60%]">
                <div className="text-[28px] lg:text-[45px] font-nunito font-bold text-yellow-400">
                  <h1>{details.title || details.name}</h1>
                </div>
                <div className="md:text-xl font-nunito font-medium md:font-bold text-white">
                  {details.tagline}
                </div>
                <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-2 md:w-auto w-48  md:items-center ">
                  <button
                    type="button"
                    className="bg-pink-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(219,39,119,0.6)] md:px-4 rounded-lg text-[18px] md:py-2 py-1 flex justify-center items-center gap-3"
                    onClick={() => navigate("/browse/player")}
                  >
                    <FaPlay /> Watch now
                  </button>
                  <button
                    type="button"
                    className="bg-white md:px-4 rounded-lg text-[18px] md:py-2 py-1 flex justify-center items-center gap-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.6)]"
                    onClick={!cardfound ? handleAddToList : undefined}
                  >
                    {cardfound ? (
                      <FaCheck className="text-2xl text-green-500 transition-colors duration-300 ease-in-out cursor-pointer" />
                    ) : (
                      <FaPlus className="text-2xl text-green-500 transition-colors duration-300 ease-in-out cursor-pointer" />
                    )}
                    {text1}
                  </button>
                </div>
                <Ratings/>
                <div className="text-white md:text-2xl font-nunito md:line-clamp-4 line-clamp-3 font-medium">
                  <p>
                    {typeof overview === "string"
                      ? overview
                      : "Overview not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:h-[85vh] md:w-[30vw]">
        <div className="self-center justify-self-center">
          <div className="absolute inset-0 filter backdrop-brightness-50 md:bg-transparent bg-black"></div>
          <div className="text-white lg:text-xl flex flex-col font-nunito p-8 relative inset-0 space-y-4 md:mt-0 px-8 mb-5">
            <p className="border-b-2 border-gray-600">
              Language: {details.original_language}
            </p>
            <p className="border-b-2 border-gray-600">
              Release Date:
              {dayjs(
                context.first_air_date ||
                  context.release_date ||
                  details.first_air_date ||
                  details.release_date
              ).format("DD/MM/YYYY")}
            </p>
            <p className="border-b-2 border-gray-600">
              Status: {details.status}
            </p>
            <p className="border-b-2 border-gray-600">
              Runtime: {details.runtime || details.episode_run_time?.[0]} mins
            </p>
            <p className="border-b-2 border-gray-600">
              Ratings: {context.vote_average || details.vote_average}
            </p>
            <div className="border-b-2 border-gray-600">
              Origin Country:
              {details.origin_country?.slice(0, 4).map((c, index) => (
                <span key={index}>
                  {c}
                  {index < details.origin_country.slice(0, 4).length - 1
                    ? " , "
                    : ""}
                </span>
              ))}
            </div>
            <p className="border-b-2 border-gray-600">
              Production Company: {details.production_companies?.[0]?.name}
            </p>
            <p className="border-b-2 border-gray-600">
              Budget: ${details.budget || NaN}
            </p>
            <p className="border-b-2 border-gray-600">
              Revenue: ${details.revenue || NaN}
            </p>
            <div className="border-b-2 border-gray-600 pb-2  flex flex-wrap">
              Genres:
              {details.genres?.map((genre) => (
                <p
                  key={genre.id}
                  className="bg-slate-600 ml-2 px-4 mb-2 rounded-[5px]"
                >
                  {" "}{genre.name}{" "}
                </p>
              ))}
            </div>
            <div className="border-b-2 border-gray-600 pb-2">
              Director:
              {credits.crew
                ?.filter((member) => member.job === "Director" || "Directing")
                .slice(0, 3)
                .map((director) => (
                  <span
                    className="pr-3 pl-2 border-r-2 border-gray-600"
                    key={director.id}
                  >
                    {director.name}
                  </span>
                ))}
            </div>
            <div className="border-b-2 border-gray-600 pb-2">
              Producer:
              {credits.crew
                ?.filter((member) => member.job === "Producer")
                .slice(0, 3)
                .map((producer) => (
                  <span
                    className="pr-3 pl-2 border-r-2 border-gray-600"
                    key={producer.id}
                  >
                    {producer.name}
                  </span>
                ))}
            </div>
            <div />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Details;
