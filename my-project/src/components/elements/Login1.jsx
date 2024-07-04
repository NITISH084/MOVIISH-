import { useNavigate } from "react-router-dom";
const Login1 = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className=" items-center flex  flex-col flex-wrap absolute z-30">
          <h1 className="text-white font-extrabold text-center  lg:text-[48px]  text-[32px] p-3">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white text-center  lg:text-[24px] text-[18px] font-semibold mb-5">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-center  lg:text-[24px] text-[18px] font-semibold mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <label className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              className="bg-custom-gradient2 h-full 
              bg-transparent mr-3 border-solid border-2 border-gray-500 
        rounded-[5px] pt-3 pb-3  p-7  lg:w-[328px] sm:mb-0 w-[300px] mb-3 text-white"
              placeholder="Email address"
            ></input>
            <button className="bg-red-600  h-full items-center text-white pt-2 pb-2  p-6 font-bold rounded-[5px] lg:mb-0 lg:text-[24px] text-[18px] flex" onClick={()=>{
              navigate("/login")
            }}>
              Get Started 
                <img
                  className="lg:ml-4  lg:h-[18px] ml-2 h-[10px] invert p-0"
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                  alt=""
                />
            </button>
          </label>
        </div>
    </>
  )
}
export default Login1