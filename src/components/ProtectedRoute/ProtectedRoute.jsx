import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function ProtectedRoute({children}) {
    const isAuthenticated = useSelector(state => state.auth.status)
    const navigate = useNavigate()
 useEffect(() => {
    if(isAuthenticated === false ){
        console.log(isAuthenticated)
        navigate('/login')
    }
 },[isAuthenticated])                                                                         
 return children
}

export default ProtectedRoute