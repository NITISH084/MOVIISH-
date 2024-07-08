import { useSelector } from "react-redux";
import Header1 from "../Header1";
import Netflix_bg1 from "../elements/Netflix_bg1";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const userData = useSelector(state.user.userData)
  const navigate =useNavigate()
  useEffect(()=>{
    if(userData){
      navigate('/browse')
    }
  })
  
  return (
    <>
      <Header1 />
      <Netflix_bg1/>
    </>
  );
};
export default Login;
