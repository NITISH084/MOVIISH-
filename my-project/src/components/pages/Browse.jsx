import { useDispatch, useSelector } from "react-redux";
import Header2 from "../Header2";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Moviecont from "../elements/Moviecont";
import Maincont from "../elements/Maincont";
import usemoviePlayingCurrently from "../../hooks/usemoviePlayingCurrently.";
import usemoviePopularCurrently from "../../hooks/usemoviePopularCurrently";
import usemovieTopRated from "../../hooks/usemovieTopRated";
import usemovieUpcoming from "../../hooks/usemovieUpcoming"
import usetvPopular from "../../hooks/usetvPopular";
import usetvTopRated from "../../hooks/usetvTopRated";
import useVideosbg from "../../hooks/useVideosbg";
import { setMoviePage } from "../../Redux/movieSlice";
import { setTvPage } from "../../Redux/tvSlice";
import { setRecommendations, setSimilar, setWatchMore } from "../../Redux/browseSlice";
import { setSelected, setSelectedCard, setSelectedCardMedia, setSelectedCardURL } from "../../Redux/userSlice";



const Browse = () => {
  const userin = useSelector((state) => state.user.userData);
  const watchmore =useSelector((state)=>state.userfunctionalities.watchmore)
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const scrollToRef = useRef(null);
  // custom hooks
   usemoviePlayingCurrently();
   usemoviePopularCurrently();
   usemovieTopRated()
   usemovieUpcoming()
   usetvPopular()
   usetvTopRated()
   useVideosbg()
   

   //protected route
  useEffect(() => {
    if (!userin) {
      navigate("/");
    }
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    

    dispatch(setMoviePage(false));
    dispatch(setTvPage(false))
    dispatch(setRecommendations(null));
    dispatch(setSimilar(null));
    dispatch(setWatchMore(false));
    dispatch(setRecommendations(null));
    dispatch(setSimilar(null));
    dispatch(setSelected(false))
    dispatch(setSelectedCard(null))
    dispatch(setSelectedCardMedia(null))
    dispatch(setSelectedCardURL(null))
  }, [dispatch,userin]);

  return (
    <>
      <Header2 />
      <div className="flex flex-col relative overflow-hidden scrollbar-hide scroll-smooth  
      ">
        <Maincont ref={scrollToRef} />
        <Moviecont />
      </div>
    </>
  );
};
export default Browse;
