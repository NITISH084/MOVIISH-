import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading, setuserData } from "../../Redux/userSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { endpoint_api } from "../../../utils/constant";
import { setMylist } from "../../Redux/browseSlice.js";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Signinform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.user.isLoading);
 

  // Function to fetch user's list after successful login
  const getCardList = async (userId) => {
    try {
      const res = await axios.post(
        `${endpoint_api}/getlist`,
        { user: userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.msg);
        // Dispatch action to update mylist in Redux store
        dispatch(setMylist(res.data.userCards));
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.msg);
      } else {
        toast.error("Error in fetching card");
      }
      console.log("Error in fetching card", error);
    }
  };

  // Function to handle form submission
  const handleUserdata = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true)); // Start loading state

    try {
      const res = await axios.post(
        `${endpoint_api}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.msg);
        dispatch(setuserData(res.data.nomatch)); // Update user data in Redux store
        await getCardList(res.data.nomatch._id); // Fetch user's card list

        navigate("/browse"); // Navigate to browse page after successful login
      }
    } catch (error) {
      toast.error(error.response.data.msg); // Display error message
      console.log(error);
    } finally {
      dispatch(setLoading(false)); // Stop loading state
      setEmail("");
      setPassword("");
    }
  };
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

  return (
    <div className="bg-[#000000b3] z-30 w-[450px] md:scale-100 scale-75">
      <form
        onSubmit={handleUserdata}
        className="flex flex-col pl-[68px] pr-[68px] pt-[48px] pb-[48px] rounded-[4px] h-[600px]"
      >
        <h2 className="text-[32px] font-bold text-white mb-[28px]">Sign In</h2>
        <input
          value={email}
          type="email"
          placeholder="Email address"
          className="text-[16px] p-[16px] w-full mb-[50px] bg-[#0f0f0f] border-solid border-2 border-gray-500 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />


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
          className="bg-[#e50914] w-full rounded-[4px] text-[16px] p-[16px] pt-[6px] pb-[6px] text-white mb-5 flex items-center justify-center"
          >
          {loader ? (
            <div className="flex justify-center items-center">
              <AiOutlineLoading3Quarters className="animate-spin" />
              <p className="ml-2">Processing...</p>
            </div>
          ) : (
            "Sign In"
          )}
        </button>
        <p className="mb-5 text-center text-white">OR</p>
        <button
          type="button"
          className="bg-[#333333] w-full rounded-[4px] text-[16px] p-[16px] pt-[6px] pb-[6px] text-white mb-5"
        >
          Use a sign-in code
        </button>
        <a href="#" className="text-center mb-5 text-white">
          Forgot password?
        </a>
        <div>
          <input id="remember" type="checkbox" className="rounded-[2px] border-black" />
          <label htmlFor="remember" className="text-white pl-3">
            Remember me
          </label>
        </div>
      </form>
    </div>
  );
};

export default Signinform;
