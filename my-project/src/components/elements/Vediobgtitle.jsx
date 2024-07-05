import { IoInformationCircleOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setMute } from "../../Redux/dataSlice";
import { setWatchMore } from "../../Redux/browseSlice";
import { useMemo } from "react";
import useRecommendation from "../../hooks/useRecommendation";
import useSimilar from "../../hooks/useSimilar";
import { useNavigate } from "react-router-dom";
import { setPlayButton } from "../../Redux/userSlice";

const Vediobgtitle = ({ count }) => {
  const data0 = useSelector((state) => state.tv);
  const data1 = useSelector((state) => state.movie);
  const data2 = useSelector((state) => state.data.movieCurrently);
  const mute = useSelector((state) => state.data.mute);
  const data = useMemo(() => {
    if (data0.tvpage) {
      return data0.tvTrending;
    } else if (data1.moviepage) {
      return data1.movieTrending;
    } else {
      return data2 || [];
    }
  }, [data0, data1, data2]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useRecommendation();
  useSimilar();

  if (!data || !data[count]) {
    return null; // Render nothing if data or data[count] is not available
  }
  const title = data[count].title || data[count].name;

  const handleClick = () => {
    dispatch(setMute(!mute)); // Toggle mute state
    console.log("toggled");
  };

  return (
    <div
      className="w-screen aspect-video absolute top-0 z-10 text-gray-400 pt-[10%] md:pt-[15%] px-8 overflow-hidden"
      onClick={handleClick}
    >
      <h1 className="text-xl md:text-6xl font-nunito font-bold text-yellow-500 mb-2">
        {title}
      </h1>
      <p className="mb-5 xl:w-2/5 w-2/3 md:text-[20px] text-pretty font-playfair   line-clamp-3 md:line-clamp-5">
        {data[count].overview}
      </p>
      <div className="flex items-center space-x-3">
        <button
          className="flex justify-center items-center bg-[#e50914] px-2 py-1 md:px-6 md:py-2 text-black rounded hover:bg-red-500"
          onClick={() => {
            dispatch(setPlayButton(true));
            navigate("/browse/Player");
          }}
        >
          <CiPlay1  className="mr-1 md:text-[24px]" />
          Play
        </button>
        <button
          className="flex justify-center items-center bg-gray-500 opacity-80  px-2 py-1 md:px-6 md:py-2 text-black rounded"
          onClick={() => {
            dispatch(setWatchMore(true));

            navigate("/browse/recommendations");
          }}
        >
          <IoInformationCircleOutline  className="mr-1 md:text-[24px]" />
          Watch more
        </button>
      </div>
    </div>
  );
};

export default Vediobgtitle;
