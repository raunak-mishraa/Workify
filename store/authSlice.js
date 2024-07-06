


import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     status: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    isClient: JSON.parse(localStorage.getItem('isClient')) || false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.isClient = action.payload;
            console.log(action.payload,'action.payload')
        },
        logout: (state) => {
            state.status = false;
            state.isClient = false;
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('isClient');
        },
     }
})

export const {login, logout, updateUserAvatar } = authSlice.actions;

export default authSlice.reducer;