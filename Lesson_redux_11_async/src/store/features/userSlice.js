import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=10`);
            const { results } = await response.json();

            return results;
        }
        catch (error) {
            console.log(`Ошибка при подключении данных fetchUsers: ${error}`);
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {     //ожидаем ответ от сервера
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {   //получаем ответ от сервера
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {   //ошибка при получении данных
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export default userSlice.reducer; 

 
 