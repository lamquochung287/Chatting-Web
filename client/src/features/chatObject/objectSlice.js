import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const objectName = localStorage.getItem("objectName");

const initialState = {
    objectName: objectName ? objectName : null,
    isLoading: false,
    chatList: [],
}

export const objectSlice = createSlice({
    name: "chatting",
    initialState,
    reducers: {
        setObjectName: (friendName) => {
            localStorage.setItem("objectName", friendName);
        }
    }

})
export const { setObjectName } = objectSlice.actions
export default objectSlice.reducer
