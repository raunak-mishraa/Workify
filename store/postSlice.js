import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPost : null,
    bookmarkPost : null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        selectPost : (state, action) => {
            state.selectedPost  = action.payload;
        },
        bookmarkPost : (state, action) => {
            state.bookmarkPost  = action.payload;
        },
     }
})

export const {selectPost, bookmarkPost} = postSlice.actions;

export default postSlice.reducer;