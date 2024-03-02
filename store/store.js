import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import postSlice from './postSlice';
import applicationSlice from './applicationSlice';
import notificationSlice from './notificationSlice';
const store = configureStore({
    reducer: {
        auth : authSlice,
        post: postSlice,
        application: applicationSlice,
        notification: notificationSlice
    }
});


export default store;