import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice"
import usersReducer from "../features/users/userSlice"
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer,
        counter: counterReducer
    }
})





