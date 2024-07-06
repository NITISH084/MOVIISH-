import React, { useEffect } from "react";
import Header2 from "../Header2";
import Filterform from "../elements/Filterform";
import useFilterTV from "../../hooks/useFilterTV";
import useTrendingTV from "../../hooks/useTrendingTV";
import Maincont from "../elements/Maincont";
import Tvcont from "../elements/Tvcont";
import useVideosbg from "../../hooks/useVideosbg";
import { setTvPage, settvsearch } from "../../Redux/tvSlice";
import { setMoviePage, setmoviesearch } from "../../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import Filteredresults from "../elements/Filteredresults"
import { setRecommendations, setSimilar, setWatchMore } from "../../Redux/browseSlice";

const Tvshows = () => {
  const dispatch= useDispatch();
  const userin = useSelector((state) => state.user.userData);
  const yeartv =useSelector((state)=>state.tv.year)
  const yearmovie =useSelector((state)=>state.movie.year)
  useEffect(()=>{

    
   //protected route
    if (!userin) {
      navigate("/");
    }
    dispatch(setTvPage(true))
    dispatch(setMoviePage(false))
    dispatch(settvsearch(null)) 
    dispatch(setmoviesearch(null))
    dispatch(setRecommendations(null));
    dispatch(setSimilar(null));
    dispatch(setWatchMore(false));
  },[dispatch,userin])
  useTrendingTV()
  useVideosbg()
  return (
    <>
      <Header2 />
      <div className="flex flex-col relative overflow-hidden no-scrollbar">
     <Maincont/>
      <Tvcont/>
      <Filterform />
      { yeartv &&  <Filteredresults />}
      { yearmovie &&  <Filteredresults />}
     
      </div>
    </>
  );
};

export default Tvshows;
