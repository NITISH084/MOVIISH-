import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMultiSearch from "../../hooks/useMultiSearch";

const Multilist = () => {
  useMultiSearch()
  const title = useSelector((state) => state.user.inputsearch);

  const data = useSelector((state) => state.user.multisearch);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/browse");
  };
  if(!data){
    return
  }
  return (
    <>
      {data.length>0 && (
        <div className="font-playfair absolute top-16 text-gray-400 z-20 w-full md:bg-transparent bg-slate-800">
          <h1 className="text-3xl font-semibold py-3 px-8 text-white text-center">
            Search results for : {title}
          </h1>
          <div className="px-8 mt-5 font-playfair flex flex-col justify-center items-center ">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 cursor-pointer overflow-hidden ">
              {data && data.map((info) => <Card key={info.id} data={info} />)}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleBackClick}
                className="bg-red-500 py-2 px-6 rounded-[5px] text-white text-lg cursor-pointer"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
      { data.length===0 && (
        <div className="font-playfair absolute top-16 text-gray-400 z-20 w-full ">
          <h1 className="text-3xl font-semibold py-3 px-8 text-teal-400 text-center">
            Search Results for : {title}
          </h1>
              <p className="text-xl text-center font-semibold py-3 px-8 text-orange-300"> 
              No results found
            </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBackClick}
              className="bg-red-500 py-2 px-6 rounded-[5px] text-white text-lg cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Multilist;
