import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/postSlice";
import usersReducer from "../slices/usersSlice";

// Every time we create a slicer we need to tell the store what wait for
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})