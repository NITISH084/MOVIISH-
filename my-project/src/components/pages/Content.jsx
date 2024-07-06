import { useSelector } from "react-redux"
import Cast from "../elements/Cast"
import Details from "../elements/Details"
import RecoSimilist from "../elements/RecoSimilist"
import Header2 from "../Header2"
import { useEffect } from "react"

const Content = () => {
  const userin = useSelector((state) => state.user.userData);
  
   //protected route
   useEffect(() => {
    if (!userin) {
      navigate("/");
    }},[userin])

  return (
    <div className="overflow-hidden">
        <Header2/>
        <Details/>
        <Cast/>
        <RecoSimilist/>

    </div>
  )
}
export default Content