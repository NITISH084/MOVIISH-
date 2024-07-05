import React from "react";
import Card from "./Card";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setRecommendations,
  setSimilar,
  setWatchMore,
} from "../../Redux/browseSlice";
import useRecommendation from "../../hooks/useRecommendation";
import useSimilar from "../../hooks/useSimilar";
import { setMute } from "../../Redux/dataSlice";

const RecoSimilist = () => {
  const data1 = useSelector(
    (state) => state.userfunctionalities.Recommendation
  );
  const data2 = useSelector((state) => state.userfunctionalities.similar);
  const moviepage = useSelector((state) => state.movie.moviepage);
  const tvpage = useSelector((state) => state.tv.tvpage);
  const watchmore = useSelector((state) => state.userfunctionalities.watchmore);
  const mute = useSelector((state) => state.data.mute);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useRecommendation();
  useSimilar();
  return (
    <div className="bg-black overflow-hidden h-fit min-h-screen">
      <div className="flex  flex-col relative ">
        <div className="px-8 font-playfair">
          <p
            className="text-3xl text-white font-semibold
           py-3"
          >
            Recommendations
          </p>
          <div className="flex overflow-x-auto overflow-hidden no-scrollbar cursor-pointer ">
            <div className="flex items-center  space-x-4  ">
              {data1 &&
                data1.map((info1) => <Card key={info1.id} data={info1} />)}
            </div>
          </div>
        </div>
        <div className="px-8 font-playfair mb-12 ">
          <p
            className="text-3xl text-white font-semibold
         py-3 "
          >
            Similar
          </p>
          <div className="flex overflow-x-auto overflow-hidden no-scrollbar cursor-pointer ">
            <div className="flex items-center space-x-4  ">
              {data2 &&
                data2.map((info2) => <Card key={info2.id} data={info2} />)}
            </div>
          </div>
        </div>

        <div className="flex self-center justify-self-end  text-xl font-medium overflow-hidden  ">
          <button
            type="button"
            className="absolute bottom-0  m-1 px-8 py-0 opacity-90  rounded-[5px] hover:text-red-950 text-blue-200 font-medium text-lg z-10 bg-slate-600 hover:bg-red-700 mx-auto "
            onClick={() => {
              dispatch(setWatchMore(false));
              dispatch(setRecommendations(null));
              dispatch(setSimilar(null));
              dispatch(setMute(!mute));
              navigate("/browse");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default RecoSimilist;
