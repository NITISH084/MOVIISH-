import { endpoint_api } from "../../../utils/constant";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setIsLogin,
  setuserData,
  setInputSearch,
  setMultiSearch,
  setPlayButton,
  setSelected,
  setSelectedCardURL,
  setSelectedCard,
} from "../../Redux/userSlice";
import { setIsScroll, setIsSearch, setMylist } from "../../Redux/browseSlice";
import { useEffect, useState } from "react";
import {
  setgenretv,
  setpagetv,
  setpopularitytv,
  setregiontv,
  settvsearch,
  setyeartv,
} from "../../Redux/tvSlice";
import {
  setgenremovie,
  setmoviesearch,
  setpagemovie,
  setpopularitymovie,
  setregionmovie,
  setyearmovie,
} from "../../Redux/movieSlice";

const Usersigned = () => {
  const [localSearchInput, setLocalSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userin = useSelector((state) => state.user.userData);
  
  const issearch = useSelector((state) => state.userfunctionalities.issearch);
  const isscroll = useSelector((state) => state.userfunctionalities.isscroll);

  // Scrollbar feature
  useEffect(() => {
    const handleScroll = () => {
      dispatch(setIsScroll(window.pageYOffset !== 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${endpoint_api}/logout`);
      if (res.data.success) {
        toast.success(res.data.msg);
        dispatch(setuserData(null));
        dispatch(setIsLogin(false));
        dispatch(setIsSearch(false));
        dispatch(setMultiSearch(null));
        dispatch(settvsearch(null));
        dispatch(setmoviesearch(null));
        dispatch(setgenretv(null));
        dispatch(setpopularitytv(null));
        dispatch(setpagetv(null));
        dispatch(setregiontv(null));
        dispatch(setgenremovie(null));
        dispatch(setpopularitymovie(null));
        dispatch(setpagemovie(null));
        dispatch(setregionmovie(null));
        dispatch(setyearmovie(null));
        dispatch(setyeartv(null));
        dispatch(setPlayButton(false));
        dispatch(setSelected(false));
        dispatch(setSelectedCardURL(null));
        dispatch(setSelectedCard(null));
        navigate("/");
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error("Failed to logout. Please try again.");
      console.log(error);
    }
  };

  const handleSearchBar = () => {
    dispatch(setIsSearch(!issearch));
  };

  const handleChange = (e) => {
    setLocalSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (localSearchInput !== "") {
      dispatch(setInputSearch(localSearchInput)); // Update the search input in the Redux store
      navigate("/browse/search");
    }
  };

  const handleClickHome = () => {
    dispatch(setMultiSearch(null));
    navigate("/browse");
  };

  const handleClickTvshows = () => {
    dispatch(setMultiSearch(null));
    navigate("/browse/Tvshows");
  };

  const handleClickMovies = () => {
    dispatch(setMultiSearch(null));
    navigate("/browse/Movies");
  };
  const handleClickMyList = async () => {
    dispatch(setMultiSearch(null));
  
    navigate("/browse/Mylist");
  };

  const bgcolor = isscroll ? "bg-[#000000b3]" : "bg-transparent ";
  const dis1 = isscroll ? "block" : "hidden";
  const dis2 = issearch ? "block" : "hidden";

  return (
    <div className="p-0 top-0 relative">
      <div
        className={`flex w-[100%] items-center z-30 p-2 ${bgcolor} ${dis1} space-x-2 lg:space-x-4 fixed text-white py-4`}
      >
        <img
          className="md:w-[148px] md:h-[40px] w-[56px] "
          src="https://app.gemoo.com/share/image-annotation/667602796832636928?codeId=v6aaKGbxq9neJ&origin=imageurlgenerator"
          alt="netflix-logo"
        />
        <div className="flex items-center justify-center space-x-3 lg:space-x-4 lg:text-[18px] text-[12px]">
          <button
            className="lg:hover:text-2xl hover:text-[14px] hover:font-medium transition-all duration-300"
            onClick={handleClickHome}
          >
            Home
          </button>
          <button
            className="lg:hover:text-2xl hover:text-[14px] hover:font-medium transition-all duration-300"
            onClick={handleClickTvshows}
          >
            TV Shows
          </button>
          <button
            className="lg:hover:text-2xl hover:text-[14px] hover:font-medium transition-all duration-300"
            onClick={handleClickMovies}
          >
            Movies
          </button>

          <button
            className="lg:hover:text-2xl hover:text-[14px] transition-all duration-300"
            onClick={handleClickMyList}
          >
            My List
          </button>
        </div>
        <div className="flex items-center justify-end relative right-0 grow lg:space-x-4 lg:text-[18px] text-[12px] space-x-2">
          <label htmlFor="search">
            <FaSearch
              onClick={handleSearchBar}
              className="cursor-pointer text-[18px]"
            />
          </label>
          <form onSubmit={handleSubmit}>
            <input
              id="search"
              type="search"
              value={localSearchInput}
              onChange={handleChange}
              className={`${dis2} bg-[#000000b5] border border-white text-white p-[5px] transition-transform duration-300`}
            />
          </form>
          <p>{userin.name}</p>
          <button>
            <img
              className="lg:h-10 h-6"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.jpg"
              alt="user icon"
            />
          </button>
          <button onClick={handleLogout}>
            <img
              className="h-6 rounded-full"
              src="https://e7.pngegg.com/pngimages/566/473/png-clipart-power-on-and-off-logo-red-power-button-electronics-power-buttons.png"
              alt="logout button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usersigned;
