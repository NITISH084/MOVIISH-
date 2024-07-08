import { useNavigate } from "react-router-dom";
import Header2 from "../Header2";
import Netflix_bg2 from "../elements/Netflix_bg2";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Login2 = () => {
  const userData = useSelector((state)=>state.user.userData)
  const navigate =useNavigate()
  useEffect(()=>{
    if(userData){
      navigate('/browse')
    }
  })
  return (
    <>
      <Header2 />
      <Netflix_bg2 />
    </>
  );
};
export default Login2;
