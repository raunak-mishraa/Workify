import { useSelector } from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
   const isLoggedIn = useSelector(state => state.auth.status)
   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute

