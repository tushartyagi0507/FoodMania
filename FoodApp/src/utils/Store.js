import { configureStore, createReducer } from "@reduxjs/toolkit";
import Cartreducer from "./Redux Slices/CartSlice";

const Store = configureStore({
    reducer: {      // this reducer is the one which is for the big main store and it keeps the reducers of the other slices in it by their respecitve names
        cart: Cartreducer,
    },
})

export default Store