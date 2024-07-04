import { createSlice } from "@reduxjs/toolkit";

const browseSlice = createSlice({
    name:"functionalities",
    initialState: {
        issearch:false,
        isscroll:false,
        watchmore:false,
        count:0,
        Recommendation:null,
        similar:null,
        mylist:null,
    },
    reducers:{
        setIsSearch:(state,action)=>{
            state.issearch=action.payload;
        },
        setIsScroll:(state,action)=>{
            state.isscroll=action.payload;
        },
        setWatchMore:(state,action)=>{
            state.watchmore=action.payload;
        },
        setcount:(state,action)=>{
            state.count=action.payload;
        },
        setRecommendations :(state,action)=>{
            state.Recommendation=action.payload;
        },
        setSimilar:(state,action)=>{
            state.similar = action.payload;
        },
        setMylist:(state,action)=>{
            state.mylist=action.payload;
        }
    }
})

export const {setIsSearch,setIsScroll,setWatchMore,setcount,setRecommendations,setSimilar,setMylist} =browseSlice.actions;
export default browseSlice.reducer;