import {createSlice} from "@reduxjs/toolkit";


const initialState={
    cart: [
        // {
        //     pizzaId: 1,
        //     name: 'Product 1',
        //     quantity: 2,
        //     unitPrice: 15,
        //     totalPrice: 30,
        // }
    ],

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action) =>{
            // payload = The newItem
            state.cart.push(action.payload);

        },
        deleteItem: (state, action) =>{
        //    payload = The Id
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);

        },
        increaseItemQuantity: (state, action) =>{
            //    payload = The Id
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;

        },
        decreaseItemQuantity: (state, action) =>{
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);

        },
        clearCart: (state, action) =>{
            state.cart = []
        },
    }

})


// used for to minpulate the slice to change the value in short to get acsess to the reducers like the addItem and so on
export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart } = cartSlice.actions;

// we use this to add the reducer to the store and the store will store all the reducers and used to display the things that are in the reducer //
export default cartSlice.reducer;




// get functions

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum,item) => sum + item.quantity,0)

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum,item) => sum + item.totalPrice,0)

export const getCurrentQuantityById = (id) =>  (state) => state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0 ;