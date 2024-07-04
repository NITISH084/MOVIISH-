import { useSelector } from "react-redux"
import Tvlist from "./Tvlist"
import useVideosbg from "../../hooks/useVideosbg"
import useFilterTV from "../../hooks/useFilterTV"
const Tvcont = () => {
    const res=useSelector((state)=>state.tv)
    useVideosbg()
    useFilterTV()
    return (
    <div className="bg-black">

    <div className=" z-10 lg:-mt-52 flex flex-col relative">
      <Tvlist title={"Currently Trending"} data={res.tvTrending} />
    </div>
  </div>
  )
}
export default Tvcont