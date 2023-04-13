import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useGlobalContext();
    console.log(user)
    if (!user) {
        return (
            <Navigate to="/login"></Navigate>
        )
    }
    return children;
}

export default ProtectedRoute
