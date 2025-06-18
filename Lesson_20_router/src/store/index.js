import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@store/features/userSlice"

const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export default store;