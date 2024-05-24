import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import cartSlice from "./Slice/cartSlice";
 
const cartStore =  configureStore({
    reducer:{
        productReducer:productSlice,
        cartReducer:cartSlice

    }
})

export default cartStore