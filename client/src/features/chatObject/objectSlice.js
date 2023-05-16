import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const objectName = localStorage.getItem("chatWith");

const initialState = {
    objectName: null,
    isLoading: false,
    isNewMessage: false,
    findFriendByName: "",
    chatList: [],
}

export const sendMessage = createAsyncThunk("chats/sendMessage", async (input, thunkAPI) => {
    try {
        console.log("OBJECT SLICE ", input)
        const resp = await axios.post("https://chatting-web-iiv3.onrender.com/api/chats/sendMessage", { receiveName: input.objectName, message: input.message })
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


export const objectSlice = createSlice({
    name: "chatting",
    initialState,
    reducers: {
        setObjectName: (state, { payload }) => {
            state.objectName = payload;
        },
        findFriendName: (state, { payload }) => {
            state.findFriendByName = payload;
        }
    },
    extraReducers: {
        [sendMessage.pending]: (state) => {
            state.isLoading = true;
            state.isNewMessage = false;
        },
        [sendMessage.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isNewMessage = true;
            console.log(payload)

        },
        [sendMessage.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isNewMessage = false;
            console.log(payload)
        }
    }

})
export const { setObjectName, findFriendName } = objectSlice.actions
export default objectSlice.reducer
