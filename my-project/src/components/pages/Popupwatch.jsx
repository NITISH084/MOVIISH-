import { useSelector } from "react-redux";
import RecoSimilist from "../elements/RecoSimilist"
import { useEffect } from "react";

const Popupwatch = () => {
  const userin = useSelector((state) => state.user.userData);
  
   //protected route
   useEffect(() => {
    if (!userin) {
      navigate("/");
    }},[userin])
  return (
    <div className="flex  text-white  bg-black flex-col ">
       <RecoSimilist/>
        </div>
  )
}
export default Popupwatch