import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "stateMovie",
  initialState: {
    movieTrending: null,
    genre: null,
    popularity: null,
    page: null,
    region: null,
    year: null,
    moviepage: false,
    moviesearch:null,
  },
  reducers: {
    setmovieTrending: (state, action) => {
      state.movieTrending = action.payload;
    },
    setgenremovie: (state, action) => {
      state.genre = action.payload;
    },
    setpopularitymovie: (state, action) => {
      state.popularity = action.payload;
    },
    setpagemovie: (state, action) => {
      state.page = action.payload;
    },
    setregionmovie: (state, action) => {
      state.region = action.payload;
    },
    setyearmovie: (state, action) => {
      state.year = action.payload;
    },
    setMoviePage: (state, action) => {
      state.moviepage = action.payload;
    },
    setmoviesearch:(state,action)=>{
      state.moviesearch = action.payload;
    }
  },
});
export const {
  setmovieTrending,
  setgenremovie,
  setpopularitymovie,
  setpagemovie,
  setregionmovie,
  setyearmovie,
  setMoviePage,
  setmoviesearch
} = movieSlice.actions;
export default movieSlice.reducer;
