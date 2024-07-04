import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../../Redux/userSlice";

const Usernotsigned = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

  const handlesignin = () => {
    dispatch(setIsLogin(!isLogin));
  };
 

  return (
    <div className="flex w-[100%] justify-around items-center z-30 p-10 relative ">
      <img
        className="md:w-[148px] md:h-[40px] w-[89px] h-[24px]"
        src="../../public/logo.png"
        alt="netflix-logo"
      />
      <div className="flex justify-center items-center">
        <div className="ml-4 flex items-center justify-center relative">
          <span>
            <img
              className="w-5 invert absolute ml-[6px] mt-[-7px] z-10 bg-black"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUmstISev6GBqlC7OdcpZ8UaTptoxKdiNOQ&s"
              alt="translate"
            />
          </span>
          <select className="bg-black border-solid border-2 border-gray-500 relative text-white p-4 pl-8 pt-1 pb-1 rounded-md z-0 text-base">
            <option className="bg-white text-black">English</option>
            <option className="bg-white text-black">हिंदी</option>
          </select>
        </div>

        <button
          className="ml-5 bg-[#e50914] text-white rounded-[5px] p-4 pt-[2px] pb-1 text-base 450px:mt-0 mt-2"
          onClick={handlesignin}
        >
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Usernotsigned;