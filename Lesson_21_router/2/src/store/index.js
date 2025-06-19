import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@store/features/userSlice"
import postsReducer from "@store/features/postsSlice"

const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
    }
})

export default store;