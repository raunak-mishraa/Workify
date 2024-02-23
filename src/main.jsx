import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import 'remixicon/fonts/remixicon.css'
import { RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route } from 'react-router-dom'
import SignUp from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import {FreelancerProfile, UpdateFreelancerProfile, ForgotPassword, ResetPassword} from './components/index.js'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import Dashboard from './pages/Dashboard.jsx'
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter(
  createRoutesFromElements(

      <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='login/forgot-password' element={<ForgotPassword/>}/>
        <Route path='resetpassword/:token' element={<ResetPassword/>}/>
        <Route path='freelancerprofile' element={<FreelancerProfile/>}/>
        <Route path='freelancerprofile/updatefreelancerprofile' element={<UpdateFreelancerProfile/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <RouterProvider router={router}/>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
