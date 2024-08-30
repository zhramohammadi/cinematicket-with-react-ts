
import {configureStore} from "@reduxjs/toolkit";
import footerReducer from './footerSlice.tsx'
const store = configureStore({
    reducer:{
        footer : footerReducer,
    },
})

export default store;
