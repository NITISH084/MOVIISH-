import Signinform from "./Signinform"
import Signupform from "./Signupform";
import { useSelector } from "react-redux";

const Netflix_bg2 = () => {
   const login = useSelector((state)=>state.user.isLogin)
  return (
    <>
      <div className=" flex flex-col items-center justify-end absolute top-0 left-0 right-0  lg:h-[100vh] h-[100vh] w-[100%] ">
        <div className="bg-custom-gradient1 absolute inset-0 z-20"> </div>
        <img
          className="absolute inset-0 h-[100%] w-[100%] object-cover z-10"
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          />
        
        {login?<Signinform  />:<Signupform />}
        </div>
    </>
  )
}
export default Netflix_bg2