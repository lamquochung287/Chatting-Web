import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const user = localStorage.getItem('user');

const initialState = {
    isLoading: false,
    isLogin: false,
    user: user ? JSON.parse(user) : null,
    isError: false,
    messageError: "",
}

export const loginUser = createAsyncThunk('users/login', async (input, thunkAPI) => {
    try {
        const resp = await axios.post("/api/users/login", { username: input.user.username, password: input.user.password })
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)

    }
})
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
            localStorage.removeItem('user')
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isError = false
            state.isLogin = true
            const user = payload.user;
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
            state.isLoading = false
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false
            state.isError = true;
            state.messageError = payload.msg
        }
    }

})

export const { logout } = loginSlice.actions
export default loginSlice.reducer