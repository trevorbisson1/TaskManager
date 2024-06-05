import {configureStore} from "@reduxjs/toolkit";
import eventSlice from "../Events/EventSlice";

export const store = configureStore({
    reducer:{
        eventReducer: eventSlice
    }
})