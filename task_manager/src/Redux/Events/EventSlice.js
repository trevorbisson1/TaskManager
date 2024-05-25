import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventItems : []
}

const eventSlice = createSlice({
    name: "eventSlice",
    initialState,
    reducers:{
        addEventItem : (state,action)=>{
            state.eventItems = [...state.eventItems, action.payload];
        },
        removeEventItem : (state,action)=>{
            let eventExists = state.eventItems.find((item)=>item.name === action.payload.name);
            state.eventItems.splice(eventExists,1);
        }
    }
})

export const {addEventItem,removeEventItem} = eventSlice.actions;
export default eventSlice;