import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        try {
            const res = await fetch(`${import.meta.env.APP_API_URL}/users`);
             
            if (!res.ok) {
                throw new Error("Users not Found !!!");
            }

            const data = await res.json();

            return data;
        } catch (e) {
            return e;
        }
    }
)

export const fetchUserById = createAsyncThunk(
    "users/fetchUserById",
    async (userId) => {
        try {
            const res = await fetch(`${import.meta.env.APP_API_URL}/users/${userId}`);
             
            if (!res.ok) {
                throw new Error("User not Found !!!");
            }

            const data = await res.json();

            return data;
        } catch (e) {
            return e;
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true;
            }) 
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            }) 
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            }) 
            .addCase(fetchUserById.pending, state => {
                state.loading = true;
            }) 
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            }) 
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            }) 
    }
})

export default userSlice.reducer;