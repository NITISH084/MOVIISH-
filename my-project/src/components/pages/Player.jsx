import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMute } from "../../Redux/dataSlice";
import useSelectedCardVideo from "../../hooks/useSelectedCardVideo";
import {
  setPlayButton,
  setSelected,
  setSelectedCard,
  setSelectedCardMedia,
  setSelectedCardURL,
} from "../../Redux/userSlice";

const Player = () => {
  useSelectedCardVideo();
  const video = useSelector((state) => state.data?.videourl);
  const count = useSelector((state) => state.userfunctionalities?.count);
  const playbutton = useSelector((state) => state.user?.playbutton);
  const mute = useSelector((state) => state.data?.mute);
  const selectedcardurl = useSelector((state) => state.user.selectedcardurl);
  const selected = useSelector((state) => state.user.selected);
  const [Src, setSrc] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Count:", count);
    console.log("Mute:", mute);

    if (selectedcardurl && selected) {
      const newSrc = `https://www.youtube.com/embed/${selectedcardurl}?autoplay=1&mute=false&controls=1&rel=0&modestbranding=1&iv_load_policy=0&fs=0&disablekb=1&showinfo=0&loop=0`;
      setSrc(newSrc);
      console.log("New Src:", newSrc);
    } else if (video && playbutton && video[count]) {
      const newSrc = `https://www.youtube.com/embed/${video[count].key}?autoplay=1&mute=false&controls=1&rel=0&modestbranding=1&iv_load_policy=0&fs=0&disablekb=1&showinfo=0&loop=0`;
      setSrc(newSrc);
      console.log("New Src:", newSrc);
    } else {
      console.log("Video or video[count] is not defined");
    }
  }, [count, video, mute, playbutton, selectedcardurl]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black  overflow-hidden">
      <button
        type="button"
        className="absolute bottom-0  m-1 px-8 py-0 hover:opacity-90 opacity-25 rounded-[5px] hover:text-red-950 text-blue-200 font-medium text-lg z-10 bg-slate-600 hover:bg-red-700"
        onClick={() => {
  
          navigate("/browse/Content");
        }}
      >
        Back
      </button>
      {Src ? (
        <div className="relative w-full md:h-0 md:pb-[56.25%] h-full">
          <iframe
            className="absolute top-0 left-0 h-full w-full aspect-video  "
            src={Src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            controls
          />
        </div>
      ) : (
        <img
          src="https://placehold.co/1920x1080"
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default Player;
