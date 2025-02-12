import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'theme',
    initialState:{
        isDark:true,
    },
    reducers:{
        toggleTheme:(state)=>{
            state.isDark = !state.isDark;
            console.log(state.isDark)
        }
    }
})

export const {toggleTheme} = slice.actions;
export default slice.reducer; 