import { useState } from "react";
import axios from "axios";
import { endpoint_api } from "../../../utils/constant.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading ,setIsLogin} from "../../Redux/userSlice.js";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Signupform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loader = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const handledata = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.post(
        `${endpoint_api}/register`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.msg);
        dispatch(setIsLogin(true));
      }
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setEmail("");
    setPassword("");
    setName("");
  };

  const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };


  return (
    <>
      <div className="bg-[#000000b3;] z-30 w-[450px] md:scale-100 scale-75 overflow-hidden ">
        <form
          onSubmit={handledata}
          className="flex flex-col pl-[68px] pr-[68px] pt-[48px] pb-[48px] rounded-[4px] h-[600px]"
        >
          <h2 className="text-[32px] font-bold text-white mb-[28px]">
            Sign Up
          </h2>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Username"
            type="text"
            className="text-[16px] p-[16px] text- w-full mb-[30px] bg-[#0f0f0f] border-solid border-2 border-gray-500 text-white"
          ></input>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email address"
            className="text-[16px] p-[16px] text- w-full mb-[30px] bg-[#0f0f0f] border-solid border-2 border-gray-500 text-white"
          ></input>
         
        <div className="relative">
      <input
        value={password}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="text-[16px] p-[16px] w-full mb-[50px] border-solid border-2 border-gray-500 text-white bg-[#0f0f0f]"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-9"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <VscEyeClosed className="text-white w-6 h-6" />
        ) : (
          <VscEye className="text-white w-6 h-6" />
        )}
      </button>
    </div>
          <button
            type="submit"
            className="bg-[#e50914] w-full rounded-[4px] text-[16px] p-[16px] pt-[6px] pb-[6px] text-white mb-5 flex justify-center items-center"
          >
            {loader ? (
             <div className="flex justify-center items-center">
             <AiOutlineLoading3Quarters className="animate-spin" />
             <p className="ml-2">Processing...</p>
           </div>
            ) : (
              "Sign Up"
            )}
          </button>
          <p className="mb-5 text-center text-white">OR</p>
          <button
            type="submit"
            className="bg-[#333333] w-full rounded-[4px] text-[16px] p-[16px] pt-[6px] pb-[6px] text-white mb-5 "
          >
            Use a sign-up code
          </button>
          <div>
            <input
              id="remember"
              type="checkbox"
              className="rounded-[2px] border-black "
            ></input>
            <label htmlFor="remember" className="text-white pl-3">
              Remember me
            </label>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signupform;
