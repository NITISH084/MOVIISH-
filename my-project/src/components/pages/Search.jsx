import Header2 from "../Header2"
import useMultiSearch from "../../hooks/useMultiSearch"
import Browseform from "../elements/Browseform"
import Search_bg from "../elements/Search_bg"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSelected, setSelectedCard, setSelectedCardMedia, setSelectedCardURL } from "../../Redux/userSlice"
import { setRecommendations, setSimilar, setWatchMore } from "../../Redux/browseSlice"
import { setContext, setOverview, setPoster, setTitle } from "../../Redux/contextSlice"
import { useNavigate } from "react-router-dom"


const Search = () => {
  const userin = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const dispatch= useDispatch()
  useEffect(()=>{

    
   //protected route
    if (!userin) {
      navigate("/");
    }
    dispatch(setSelected(false))
    dispatch(setSelectedCard(null))
    dispatch(setSelectedCardURL(null))
    dispatch(setSelectedCardMedia(null))
    dispatch(setWatchMore(false))
    dispatch(setContext(null))
    dispatch(setPoster(null))
    dispatch(setTitle(null))
    dispatch(setOverview(null))
    dispatch(setRecommendations(null))
    dispatch(setSimilar(null))
  },[userin,dispatch])
  return (
    <div>
    <Header2/>
    <div className="overflow-hidden">
      <Search_bg/>
      <Browseform />
    </div>
    </div>
  
  )
}
export default Search