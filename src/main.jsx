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
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  FreelancerProfile, 
  UpdateFreelancerProfile, 
  ForgotPassword, 
  ResetPassword,
} from './components/index.js'
import { Provider, useSelector } from 'react-redux'
import store from '../store/store.js'
import Dashboard from './pages/Dashboard.jsx'
import { ToastContainer } from 'react-toastify';
import CreatePost from './components/CreatePost.jsx'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import MyPost from './pages/Posts/MyPost.jsx'
import {Post} from './pages/Posts/Post.jsx'
import About from './pages/About.jsx'
import {Apply} from './pages/Posts/Apply.jsx'
import Applications from './pages/Posts/Applications.jsx'
import Profile from './components/Header/User/Profile.jsx'
import ApplicantInfo from './pages/Posts/ApplicantInfo.jsx'
import MyApplication from './components/MyApplication.jsx'
import Team from './components/Team.jsx'


const router = createBrowserRouter(
  
  createRoutesFromElements(

      <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='applicantinfo' element={<ApplicantInfo/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='mypost' element={<MyPost/>}/>
        <Route path='post' element={<Post/>}/>
        <Route path='applications' element={<Applications/>}/>
        <Route path='apply/:id' element={<Apply/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='myapplication' element={<MyApplication/>}/>
        <Route path='profile/:id' element={<Profile/>}/>
        <Route path='dashboard' element={

            <Dashboard/>

        }/>
        <Route path='createpost' element={
            <CreatePost/>
        }
        />
        <Route path='login/forgot-password' element={<ForgotPassword/>}/>
        <Route path='resetpassword/:token' element={<ResetPassword/>}/>
        <Route path='freelancerprofile' element={
            <FreelancerProfile/>
        }/>
        <Route path='updatefreelancerprofile' element={

            <UpdateFreelancerProfile/>

        }/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <GoogleOAuthProvider clientId="836943771375-l8qpt3pvjkdp7pm11hea54unrgdgrb88.apps.googleusercontent.com">
      <RouterProvider router={router}/>
      <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)
