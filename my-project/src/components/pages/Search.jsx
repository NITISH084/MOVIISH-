import Header2 from "../Header2"
import useMultiSearch from "../../hooks/useMultiSearch"
import Browseform from "../elements/Browseform"
import Search_bg from "../elements/Search_bg"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setSelected, setSelectedCard, setSelectedCardMedia, setSelectedCardURL } from "../../Redux/userSlice"
import { setRecommendations, setSimilar, setWatchMore } from "../../Redux/browseSlice"
import { setContext, setOverview, setPoster, setTitle } from "../../Redux/contextSlice"


const Search = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
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
  })
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