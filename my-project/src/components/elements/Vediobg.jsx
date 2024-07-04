import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Videobg = ({ count }) => {
  const video = useSelector((state) => state.data.videourl);
  const mute = useSelector((state) => state.data.mute);
  const [Src, setSrc] = useState('');

  useEffect(() => {
    console.log('Count:', count);
    console.log('Mute:', mute);

    if (video && video[count]) {
      const newSrc = `https://www.youtube.com/embed/${video[count].key}?autoplay=1&mute=${mute}&controls=0&rel=0&modestbranding=0&iv_load_policy=0&fs=0&disablekb=1&showinfo=0&loop=0`;
      setSrc(newSrc);
      console.log('New Src:', newSrc);
    } else {
      console.log('Video or video[count] is not defined');
    }
  }, [count, video, mute]);

  return (
    <div className="w-screen relative overflow-hidden" >
      {Src ? (
        <iframe
          className="w-screen aspect-video scale-[1.35]"
          src={Src}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
       <img src="https://placehold.co/1920x1080" alt="placeholder" />
      )}
    </div>
  );
};

export default Videobg;
