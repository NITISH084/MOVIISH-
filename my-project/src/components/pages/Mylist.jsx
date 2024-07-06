import { useEffect } from "react";
import { setMylist, setWatchMore } from "../../Redux/browseSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { endpoint_api } from "../../../utils/constant";
import { FaPlay } from "react-icons/fa";
import { setSelected, setSelectedCard, setSelectedCardMedia } from "../../Redux/userSlice";
import { setContext, setOverview, setPoster, setTitle } from "../../Redux/contextSlice";
import { useNavigate } from "react-router-dom";
import useDetails from "../../hooks/useDetails";
import useCredits from "../../hooks/useCredits";
import useSelectedCardVideo from "../../hooks/useSelectedCardVideo";
import useRecommendation from "../../hooks/useRecommendation"
import useSimilar from "../../hooks/useSimilar"
import Header2 from "../Header2"
import { MdDelete } from "react-icons/md";
const Mylist = () => {
  const userin = useSelector((state) => state.user.userData);
  const user = useSelector((state) => state.user.userData?._id);
  const data = useSelector((state) => state.userfunctionalities.mylist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
   //protected route
   useEffect(() => {
    if (!userin) {
      navigate("/");
    }},[userin])

  useDetails();
  useCredits();
  useSelectedCardVideo();
  useRecommendation();
  useSimilar();
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
  useEffect(()=>{
    
    getCardList(user)
  },[dispatch,user])
 
 
  if (!data || data.length === 0) {
    return (
      <div className="px-8 flex justify-center items-center bg-black inset-0 h-[100vh]">
        <div className="text-white font-nunito font-medium text-center">
          <img 
            src="https://cdn0.iconfinder.com/data/icons/multimedia-and-electronics/512/clapboard_clapper_cinema_movie_film_production_clap_video_action_play_cinematography_studio_industry_hollywood_premiere_flat_design_icon-512.png" 
            alt="clapperboard" 
            className="mx-auto w-64"
          />
          <p className="text-3xl text-red-600 my-7">Watching Movies at 'MOVIISH' is always FUN 😁</p>
          <p className="text-xl mb-7">Your list is empty. Add some Movies and TV shows to make it full.</p>
          <button type="button" className="bg-slate-600 px-4 py-1 rounded-[5px] text-lg hover:text-red-500 hover:bg-slate-800  hover:scale-110"
          onClick={()=>{
            navigate("/browse")
          }}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header2/>
    <div className="px-8 bg-black inset-0 h-fit min-h-screen">
      <div className="text-white flex flex-col justify-center ">
        <h1 className="text-3xl p-4 font-nunito font-semibold">My List</h1>
        <div className="flex flex-col">
          <div className="grid md:grid-cols-5 xl:grid-cols-7 gap-6 grid-cols-2">
            {data.map((d) => (
              <div 
              className="relative w-36 lg:w-48 pr-4 mb-6 hover:scale-110 transition-transform duration-300 ease-in-out"
              key={d.card_id}
              >
                <img
                  className="object-fill h-full w-full rounded-[5px]"
                  src={d.img_url}
                  alt="img" 
                  />
                <div 
                  className="flex flex-col justify-center items-center absolute inset-0 space-y-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out m-0 hover:bg-custom-gradient4 rounded-[5px] object-cover h-full w-32 lg:w-44"
                  onClick={() => {
                    dispatch(setSelectedCard(d.card_id));
                    dispatch(setSelected(true));
                    dispatch(setSelectedCardMedia(d.mediaType));
                    dispatch(setPoster(d.img_url));
                    dispatch(setWatchMore(true));
                    dispatch(setContext(null));
                    dispatch(setTitle(null))
                    dispatch(setOverview(null))
                    navigate("/browse/Content");
                  }}
                  >
                  <button type="button">
                    <FaPlay
                      data-aos="fade-down"
                      className="text-2xl text-red-600 transition-colors duration-300 ease-in-out cursor-pointer"
                      onClick={(e) => { 
                        e.stopPropagation();
                        dispatch(setSelectedCard(d.card_id));
                        dispatch(setSelected(true));
                        dispatch(setSelectedCardMedia(d.mediaType));
                        dispatch(setPoster(d.img_url));
                        navigate("/browse/Player");
                      }}
                      />
                  </button>
                  <button type="button" className="text-3xl text-slate-500 transition-colors duration-300 ease-in-out cursor-pointer">
                    <MdDelete
                     onClick={ async(e) => {
                      e.stopPropagation();
                      try {
                        const res= await axios.post(`${endpoint_api}/deletecard`,
                            {user:user,card_id : d.card_id},
                            {
                              headers: {
                                "Content-Type": "application/json",
                              },
                              withCredentials: true,
                            }
                        )
                        if(res.data.success){
                          toast.success(res.data.msg);
                          getCardList(user)
                        }
                      } catch (error) {
                        toast.error(error.response.data.msg);
      console.log("Error in removing from MyList, try again", error);
                      }
                    }}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="bg-slate-600 px-4 py-1 rounded-[5px] text-lg hover:text-red-500 hover:bg-slate-800 w-28 justify-items-center self-center  hover:scale-110"
          onClick={()=>{
            navigate("/browse")
          }}>
            Back
          </button>
        </div>
      </div>
    </div>
            </>
  );
};

export default Mylist;
