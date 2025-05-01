import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from "./features/cart/cartSlice.js";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});


// const addItems  = useSelector(state=> state.cart.addItem) A program like this used only for reading data from it //

export default store;