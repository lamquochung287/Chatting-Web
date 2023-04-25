import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const objectName = localStorage.getItem("chatWith");

const initialState = {
    objectName: objectName ? objectName : null,
    isLoading: false,
    chatList: [],
}

export const objectSlice = createSlice({
    name: "chatting",
    initialState,
    reducers: {
        setObjectName: (state, { payload }) => {
            console.log(payload);
            state.objectName = payload;
            localStorage.setItem("chatWith", payload);
        }
    }

})
export const { setObjectName } = objectSlice.actions
export default objectSlice.reducer
