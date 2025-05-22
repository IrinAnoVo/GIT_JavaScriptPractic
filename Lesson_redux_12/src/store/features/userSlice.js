import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            return await response.json(); // [{}, {}]
        } catch (error) {
            console.log(`Ошибка при получение данных fetchUsers`, error)
        }
    }
)

// users/fetchUsers action type
// users/increment action type
// INCREMENT
// INCREMENT/ADD === INCREMENT/ADD ---- > ...
// INCREMENT/ADD

const userSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    selectors: {
        allUsers: state => state.data
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // [{}, {}]
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

// export const usersSelectors = {
//     allUsers: state => state.users.data
// }


export const {allUsers} = userSlice.selectors;

export default userSlice.reducer;