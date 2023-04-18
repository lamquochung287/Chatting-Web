import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const initialState = {
    isLoading: false,
    isError: false,
    messageError: "",
    isSuccess: false,
}

export const registerUser = createAsyncThunk('users/register', async (input, thunkAPI) => {
    try {
        const response = await axios.post("/api/users/register", input)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const registerSlice = createSlice({
    name: "register",
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false
            state.isError = true
            state.messageError = payload.msg
        }
    }
})

export default registerSlice.reducer