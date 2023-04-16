import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context/AppContext'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ children }) => {
    const { isLogin } = useSelector((state) => state.login)
    if (isLogin === false) {
        return (
            <Navigate to="/login"></Navigate>
        )
    }
    return children;
}

export default ProtectedRoute
