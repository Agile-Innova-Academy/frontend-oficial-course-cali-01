import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";
import productSlice from "../slices/productSlice";

const store = configureStore({
    reducer: {
    user : loginSlice,
    products: productSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;
