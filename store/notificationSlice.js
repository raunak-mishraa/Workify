import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: [{
        message:"h"
    }],
}
const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotifications: (state, action) => {
            state.notifications = action.payload
        }
    }
})

export const { setNotifications } = notificationSlice.actions
export default notificationSlice.reducer