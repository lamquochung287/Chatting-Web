import React from 'react'

import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "./actions"
const reducer = (state, action) => {
    if (action.type === LOGIN_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === LOGIN_SUCCESS) {
        return { ...state, isLoading: false, isLogin: true, user: action.payload.payLoadUser }
    }
    if (action.type === LOGIN_ERROR) {
        return { ...state, isLoading: false, isError: true, messageError: "Your username or password is incorrect" }
    }
}

export default reducer
