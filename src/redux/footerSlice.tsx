import {createSlice, payloadAction} from "@reduxjs/toolkit";

interface  FooterState{
    activeButton : 'string';
}

const initialState : FooterState = {
    activeButton : 'home',
}

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers:{
        setActiveButton : (state,action : payloadAction<'string'>)=> {
            state.activeButton = action.payload;
        }
    }
})



export const { setActiveButton } = footerSlice.actions;

export default footerSlice.reducer;