import React, { useContext, useReducer } from 'react'

import reducer from './reducer.js'
import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "./actions.js"

const defaultState = {
    isLoading: false,
    nameButton: "Login",
    styleButton: "btn-submit",
    isError: false,
    isLogin: false,
    messageError: "",
    user: null,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const login = (user, action) => {
        dispatch({
            type: LOGIN_BEGIN
        })
        if (user.username === "quochung" && user.password === "123456") {
            dispatch({
                type: LOGIN_SUCCESS, payload: { payLoadUser: user }
            })
        }
        else {
            dispatch({
                type: LOGIN_ERROR
            })
        }

    }
    return (
        <AppContext.Provider
            value={{ ...state, login }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };