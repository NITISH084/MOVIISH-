import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import functionReducer from "./browseSlice"
import tvReducer from "./tvSlice"
import dataReducer from "./dataSlice"
import movieReducer from "./movieSlice"
import contextReducer from "./contextSlice"
export const store = configureStore({
    reducer:{
      user:userReducer,
      userfunctionalities:functionReducer,  
      data:dataReducer,
      tv:tvReducer,
      movie:movieReducer,
      context:contextReducer,
    }
})