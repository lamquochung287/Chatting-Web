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
    styleButton: "btn-submit"

}
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const login = (user, action) => {
        dispatch({
            type: LOGIN_BEGIN, payload: { isLoading: state.isLoading, nameButton: state.nameButton, styleButton: state.styleButton }
        })
        setTimeout(async () => {
            if (user.username === "quochung" && user.password === "123456") {
                dispatch({
                    type: LOGIN_SUCCESS, payload: { isLoading: state.isLoading, nameButton: state.nameButton, styleButton: state.styleButton }
                })
            }
            else {
                dispatch({
                    type: LOGIN_ERROR, payload: { isLoading: state.isLoading, nameButton: state.nameButton, styleButton: state.styleButton }
                })
            }
        }, 1000)

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