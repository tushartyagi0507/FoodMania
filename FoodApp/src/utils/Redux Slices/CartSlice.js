import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addItem: (state,action)=>{
    state.items.push(action.payload)  // do not use return statement as either you should return a new state let the immer library mute the state for you 
        },
       removeItem: (state,action)=>{
     state.items.filter( (it)=> it.id !== action.payload.id )// so it will filter out the item from the items which you wish to delete 
       },
       clearCart: (state)=>{
       state.items.length = 0
       }
    }
})
//we will export two things from here one is our reducer and the other are our actions 

export const {addItem, removeItem, clearCart} = CartSlice.actions;
export default CartSlice.reducer;