import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPost : null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        selectPost : (state, action) => {
            state.selectedPost  = action.payload;
        }
     }
})

export const {selectPost} = postSlice.actions;

export default postSlice.reducer;