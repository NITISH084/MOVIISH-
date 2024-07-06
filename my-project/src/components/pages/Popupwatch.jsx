import { useSelector } from "react-redux";
import RecoSimilist from "../elements/RecoSimilist"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Popupwatch = () => {
  const userin = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  
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