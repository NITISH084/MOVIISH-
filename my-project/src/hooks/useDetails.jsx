import { useEffect } from "react"
import { options } from "../../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { setDetails } from "../Redux/contextSlice"
import axios from "axios"

const useDetails = () => {
    const dispatch =useDispatch()
    const selected =useSelector((state)=>state.user?.selected)
    const selectedcard =useSelector((state)=>state.user?.selectedcard)
    const selectedcardmedia =useSelector((state)=>state.user?.selectedcardmedia)
  useEffect(()=>{
    const getDetails = async()=>{
      
    try {
        if(!selected) return
          const res = await axios.get(`https://api.themoviedb.org/3/${selectedcardmedia}/${selectedcard}`,options)
          console.log(res);
          dispatch(setDetails(res.data))
    } catch (error) {
      console.log(error)
      
    }
    }
    getDetails();
  },[selected,selectedcard,selectedcardmedia,dispatch])
}
export default useDetails