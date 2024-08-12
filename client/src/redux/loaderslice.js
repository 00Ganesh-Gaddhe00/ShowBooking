import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
     name : "loader",
     initialState:{
        loading:false,
     },
     reducers:{
        showLoading: (state)=>{
            state.loading = true
        },
        hideLoading:(state)=>{
            state.loading = false
        }
     }
})

export const {ShowLoading, HideLoading} = loaderSlice.actions
export default loaderSlice.reducer