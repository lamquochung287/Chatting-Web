import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const objectName = localStorage.getItem("chatWith");

const initialState = {
    objectName: null,
    isLoading: false,
    chatList: [],
}

export const objectSlice = createSlice({
    name: "chatting",
    initialState,
    reducers: {
        setObjectName: (state, { payload }) => {
            state.objectName = payload;
        }
    }

})
export const { setObjectName } = objectSlice.actions
export default objectSlice.reducer
