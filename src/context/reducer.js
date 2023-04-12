import React from 'react'

import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "./actions"
const reducer = (state, action) => {
    if (action.type === LOGIN_BEGIN) {
        return { ...state, isLoading: true, nameButton: "Processing...", styleButton: "btn-loading" }
    }
    if (action.type === LOGIN_SUCCESS) {
        return { ...state, isLoading: false, nameButton: "SUCCESS", styleButton: "btn-success" }
    }
    if (action.type === LOGIN_ERROR) {
        return { ...state, isLoading: false, nameButton: "Login", styleButton: "btn-submit", isError: true, messageError: "Your username or password is incorrect" }
    }
}

export default reducer
