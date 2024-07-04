import { useSelector } from "react-redux";
import { tmdb_url } from "../../../utils/constant";
import useCredits from "../../hooks/useCredits";

const Cast = () => {
  useCredits();
  const credits = useSelector((state) => state.context?.credits);

  // Check if credits or credits.cast is null or undefined
  if (!credits || !credits.cast) {
    return (
      <div className="bg-black px-8">
        <p className="text-3xl text-white font-semibold py-3 font-playfair">Cast :</p>
        <div className="text-white">No cast information available</div>
      </div>
    );
  }

  return (
    <div className="bg-black px-8 md:pt-14">
      <p className="text-3xl text-white font-semibold py-3 font-playfair">Cast </p>
      <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3">
        {credits.cast.slice(0, 12).map((c) => (
          <span key={c.id} className="p-2">
            <img
              src={`${tmdb_url}${c.profile_path}`}
              alt={c.name}
              className="md:w-32 md:h-32 w-24 h-24 object-cover rounded-full"
            />
            <p className="text-white text-center mt-2">{c.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Cast;
