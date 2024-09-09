import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './reduxSlice'

const store = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})

export default store