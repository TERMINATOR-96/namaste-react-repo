import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //redux toolkit
            //we have to mutate the state
            //redux toolkit uses immer behind the scenes
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            //mutating the state over here
            state.items.pop();
        },
        clearCart: (state, action) => {
            //mutating the state over here
            //either mutate the state or return the new state - RTK
            state.items.length = 0; // [] or return {items: []};
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;