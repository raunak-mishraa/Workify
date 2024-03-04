import { createSlice } from "@reduxjs/toolkit";
const storedAvatar = localStorage.getItem('avatar');
const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            localStorage.removeItem('avatar');
        },
        updateUserAvatar: (state, action) => {
            state.userData = {
                ...state.userData,
                user: {
                    ...state.userData.user,
                    avatar: action.payload
                }
            };
            // Also update the stored avatar in localStorage
            // localStorage.setItem('avatar', action.payload);
        },
     }
})

export const {login, logout, updateUserAvatar } = authSlice.actions;

export default authSlice.reducer;