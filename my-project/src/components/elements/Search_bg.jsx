import { useSelector } from "react-redux"

const Search_bg = () => {
    const countcards=useSelector((state)=>state.user.multisearch)
    if(!countcards)return
  return (
    <div> <div className=" flex flex-col items-center justify-center relative top-0 bottom-0 left-0 right-0 m-0 h-[100vh] w-[100vw]  ">
    <div className="bg-custom-gradient1 absolute inset-0 z-20 overflow-x-hidden "></div>
    <img
      className="absolute inset-0 h-[100%] w-[100%] bg-repeat object-cover z-10"
      alt="background"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
    /></div>
    {countcards.length>10 &&(
         <div className=" flex flex-col items-center justify-end absolute top-[100vh] left-0 right-0  lg:h-[100vh] h-[100vh] w-[100%] ">
         <div className="bg-custom-gradient3 absolute inset-0 z-20 "> </div>
         <img
           className="absolute inset-0 h-[100%] w-[100%] object-cover z-10 "
           alt="background"
           src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
           />
         </div>
    )}
    </div>
  )
}
export default Search_bg