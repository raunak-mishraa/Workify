import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    freelancerData : null,
    clientPostData : null
}

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        searchFreelancer: (state, action) =>{
            state.freelancerData = action.payload;
        },
        searchClientPosts:(state, action) =>{
            state.clientPostData = action.payload;
        }
    }

})

export const {searchFreelancer, searchClientPosts} = searchSlice.actions;

export default searchSlice.reducer;