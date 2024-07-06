import RecoSimilist from "../elements/RecoSimilist"

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