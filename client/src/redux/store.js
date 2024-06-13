import{configureStore} from "@reduxjs/toolkit";
import loaderslice from "./loaderslice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
      loader : loaderslice,
      user : userSlice
    }
})

export default store