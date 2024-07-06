import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import notificationSlice from './notificationSlice';
import searchSlice from './searchSlice';
const store = configureStore({
    reducer: {
        auth : authSlice,
        notification: notificationSlice,
        search: searchSlice
    }
});


export default store;