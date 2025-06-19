import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    comments: [],
    post: null,
    loading: false,
    error: null
}

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
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

export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (postId) => {
        try {
            const res = await fetch(`${import.meta.env.APP_API_URL}/posts/${postId}`);
             
            if (!res.ok) {
                throw new Error("Post not Found !!!");
            }

            const data = await res.json();

            return data;
        } catch (e) {
            return e;
        }
    }
)

export const fetchCommentsByPostId = createAsyncThunk(
    "posts/fetchCommentsByPostId",
    async (postId) => {
        try {
            const res = await fetch(`${import.meta.env.APP_API_URL}/posts/${postId}/comments`);
             
            if (!res.ok) {
                throw new Error("Post not Found !!!");
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
            .addCase(fetchPostById.pending, state => {
                state.loading = true;
            }) 
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload;
            }) 
            .addCase(fetchPostById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(fetchCommentsByPostId.pending, state => {
                state.loading = true;
            }) 
            .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
                state.loading = false;
                state.comments = action.payload;
            }) 
            .addCase(fetchCommentsByPostId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})

export default postsSlice.reducer;