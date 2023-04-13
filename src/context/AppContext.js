import React, { useContext, useReducer } from 'react'

import reducer from './reducer.js'
import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "./actions.js"

const user = localStorage.getItem("user")
const defaultState = {
    isLoading: false,
    nameButton: "Login",
    styleButton: "btn-submit",
    isError: false,
    isLogin: false,
    messageError: "",
    user: user ? JSON.parse(user) : null,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const login = (user, action) => {
        dispatch({
            type: LOGIN_BEGIN, payload: { isLoading: state.isLoading }
        })
        setTimeout(async () => {
            if (user.username === "quochung" && user.password === "123456") {
                dispatch({
                    type: LOGIN_SUCCESS, payload: { isLoading: state.isLoading, isLogin: state.isLogin, payloadUser: user }
                })
                localStorage.setItem("user", JSON.stringify(user))
            }
            else {
                dispatch({
                    type: LOGIN_ERROR, payload: { isLoading: state.isLoading, isError: state.isError, messageError: state.messageError }
                })
            }
        }, 500)

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