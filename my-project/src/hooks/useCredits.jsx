import { useEffect } from "react"
import axios from "axios"
import { options } from "../../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { setCredits } from "../Redux/contextSlice"
const useCredits = () => {
    const selected =useSelector((state)=>state.user?.selected)
    const id =useSelector((state)=>state.user?.selectedcard)
    const media_type =useSelector((state)=>state.user?.selectedcardmedia)
    const dispatch = useDispatch();
    useEffect(()=>{
    const getCredits = async()=>{
        try {
            if(!selected) return
            const res= await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits`,options)
            console.log(res)
            dispatch(setCredits(res.data));
        } catch (error) {
            console.log(error)
        }
    }
    getCredits()
  },[selected,id,media_type,dispatch])
}
export default useCredits