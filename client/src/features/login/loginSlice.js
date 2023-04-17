import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = localStorage.getItem('user');

const initialState = {
    isLoading: false,
    isLogin: false,
    user: user ? JSON.parse(user) : null,
    isError: false,
    messageError: false,
}

export const loginUser = createAsyncThunk('user/login', async (input, thunkAPI) => {

    if (input.user.username === "quochung" && input.user.password === "123456") {
        return input.user
    }
    else {
        return thunkAPI.rejectWithValue("username or password is not correct")
    }

})
const loginSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isLogin = true
            const user = payload;
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
            state.isLoading = false
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isError = true;
        }
    }

})


export default loginSlice.reducer