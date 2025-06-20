import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState ={
    products: [],
    loading: false,
    error: null,
}

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (categorySlug) => {
        try {
            const response = await fetch(`${import.meta.env.APP_API_URL}/products/category/${categorySlug}`);
             
            if (!response.ok) {
                throw new Error("Products not Found !!!");
            }

            const data = await response.json();

            return data.products;
        } catch (e) {
            return e;
        }
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchProductsByCategory.pending, state => {
            state.loading = true;
        }) 
        .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        }) 
        .addCase(fetchProductsByCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default productsSlice.reducer;