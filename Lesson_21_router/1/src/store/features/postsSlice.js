import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    loading: false,
    error: null
}

export const fetchPosts = createAsyncThunk(
    "users/fetchPosts",
    async (userId) => {
        try {
            const res = await fetch(`${import.meta.env.APP_API_URL}/posts?userId=${userId}`);
             
            if (!res.ok) {
                throw new Error("Posts not Found !!!");
            }

            const data = await res.json();

            return data;
        } catch (e) {
            return e;
        }
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.loading = true;
            }) 
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            }) 
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})

export default postsSlice.reducer;