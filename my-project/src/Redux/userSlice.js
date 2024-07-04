import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"userData",
    initialState:{
        userData:null,
        isLoading:false,
        isLogin:false,
        inputsearch:null,
        multisearch:null,
        playbutton:false,
        selected:false,
        selectedcard:null,
        selectedcardurl:null,
        selectedcardmedia:null,
    },
    reducers:{
        setuserData:(state,action)=>{
            state.userData=action.payload;
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload;
        },
        setIsLogin:(state,action)=>{
            state.isLogin=action.payload;
        },
        setInputSearch:(state,action)=>{
            state.inputsearch=action.payload;
        },
        setMultiSearch:(state,action)=>{
            state.multisearch=action.payload;
        },
        setPlayButton:(state,action)=>{
            state.playbutton=action.payload;
        },
        setSelected:(state,action)=>{
            state.selected=action.payload;
        },
        setSelectedCard:(state,action)=>{
            state.selectedcard=action.payload;
        },
        setSelectedCardURL:(state,action)=>{
            state.selectedcardurl=action.payload;
        },
        setSelectedCardMedia:(state,action)=>{
            state.selectedcardmedia=action.payload;
        }

    }
})

export const {setuserData,setLoading,setIsLogin,setInputSearch,setMultiSearch,setPlayButton,setSelected,setSelectedCard,setSelectedCardURL, setSelectedCardMedia} =userSlice.actions;
export default userSlice.reducer;