import { createSlice } from "@reduxjs/toolkit";
const tvSlice = createSlice({
  name: "stateTV",
  initialState: {
    tvTrending: null,
    genre: null,
    popularity: null,
    page: null,
    region: null,
    year: null,
    tvpage: false,
    tvsearch:null,
  },
  reducers: {
    settvTrending: (state, action) => {
      state.tvTrending = action.payload;
    },
    setgenretv: (state, action) => {
      state.genre = action.payload;
    },
    setpopularitytv: (state, action) => {
      state.popularity = action.payload;
    },
    setpagetv: (state, action) => {
      state.page = action.payload;
    },
    setregiontv: (state, action) => {
      state.region = action.payload;
    },
    setyeartv: (state, action) => {
      state.year = action.payload;
    },
    setTvPage: (state, action) => {
      state.tvpage = action.payload;
    },
    settvsearch:(state,action)=>{
      state.tvsearch = action.payload;
    }
  },
});
export const {
  settvTrending,
  setgenretv,
  setpopularitytv,
  setpagetv,
  setregiontv,
  setyeartv,
  setTvPage,
  settvsearch,
} = tvSlice.actions;
export default tvSlice.reducer;
