import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/product"


export const store = configureStore({
    reducer: {
        products: productReducer
    }
})


export type Rootstate = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch

