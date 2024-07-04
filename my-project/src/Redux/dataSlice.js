import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:"dataMovieTV",
    initialState:{
        movieCurrently:null,
        moviePopular:null,
        movieTopRated:null,
        movieUpcoming:null,
        tvPopular:null,
        tvTopRated:null,
        videourl:null,
        mute:1,
    },
    reducers:{
        setmovieCurrently:(state,action)=>{
            state.movieCurrently=action.payload
        },
        setmovieUpcoming:(state,action)=>{
            state.movieUpcoming=action.payload
        },
        setmovieTopRated:(state,action)=>{
            state.movieTopRated=action.payload
        },
        setmoviePopular:(state,action)=>{
            state.moviePopular=action.payload
        },
        settvPopular:(state,action)=>{
            state.tvPopular=action.payload
        },
        settvTopRated:(state,action)=>{
            state.tvTopRated=action.payload
        },
        setvideourl:(state,action)=>{
            state.videourl=action.payload
        },
        setMute:(state,action)=>{
            state.mute=action.payload
        }
    }
})
export const {  setmovieCurrently,setmoviePopular,setmovieTopRated,setmovieUpcoming,settvPopular,settvTopRated,setvideourl,setMute} = dataSlice.actions;
export default dataSlice.reducer;