import axios from "axios";
import { options, tvpopular_url } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { settvPopular } from "../Redux/dataSlice";
import { useEffect } from "react";
const usetvPopular=()=>{
    const dispatch= useDispatch()

    useEffect(()=>{
      const tvPopular =async()=>{
        
        try {
          const res = await axios.get(
            tvpopular_url,options
          );
          dispatch(settvPopular(res.data.results));
          
        } catch (error) {
          console.log(error);
        }
      }
      tvPopular()
    },[dispatch])
}
export default usetvPopular