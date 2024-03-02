import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applicationData: null
}

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setApplicationData: (state, action) => {
            state.applicationData = action.payload;
        }
     }
})

export const {setApplicationData} = applicationSlice.actions;
export default applicationSlice.reducer;
