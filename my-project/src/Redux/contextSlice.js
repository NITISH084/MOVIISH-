import { createSlice } from "@reduxjs/toolkit";
const contextSlice = createSlice({
  name: "context",
  initialState: {
    poster: null,
    title: null,
    overview: null,
    context: null,
    credits:null,
    details:null,
  },
  reducers: {
    setPoster: (state, action) => {
      state.poster = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setOverview: (state, action) => {
      state.overview = action.payload;
    },
    setContext: (state, action) => {
      state.context = action.payload;
    },
    setCredits:(state,action)=>{
      state.credits = action.payload;
    },
    setDetails:(state,action)=>{
      state.details = action.payload;
    }
  },
});

export const { setPoster, setTitle, setOverview, setContext,setCredits , setDetails } =
  contextSlice.actions;
export default contextSlice.reducer;
