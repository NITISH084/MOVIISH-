import useFilterMovies from "../../hooks/useFilterMovies"
import useTrendingMovie from "../../hooks/useTrendingMovie"
import useVideosbg from "../../hooks/useVideosbg"
import Header2 from "../Header2"
import { setTvPage, settvsearch } from "../../Redux/tvSlice"
import { setMoviePage, setmoviesearch } from "../../Redux/movieSlice"
import { useDispatch } from "react-redux"
import { useEffect, useRef } from "react"
import Maincont from "../elements/Maincont"
import Moviecont from "../elements/Moviecont"
import Filterform from "../elements/Filterform"
import Filteredresults from "../elements/Filteredresults"
import { setRecommendations, setSimilar, setWatchMore } from "../../Redux/browseSlice"

const Movies = () => {
  const dispatch= useDispatch();
  const scrollToRef = useRef(null);
  useEffect(()=>{
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    dispatch(setMoviePage(true))
    dispatch(setTvPage(false))
    dispatch(settvsearch(null)) 
    dispatch(setmoviesearch(null))
    dispatch(setRecommendations(null));
    dispatch(setSimilar(null));
    dispatch(setWatchMore(false));
  },[dispatch])
    useTrendingMovie()
    useVideosbg()
    return (
    <div>
        <Header2/>
        <div className="flex flex-col relative overflow-hidden scrollbar-hide">
        <Maincont ref={scrollToRef}/>
        <Moviecont/>
        <Filterform/>
        <Filteredresults/>
        </div>
    </div>
  )
}
export default Movies