

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import 'remixicon/fonts/remixicon.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import SignUp from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  UserProfile, 
  UpdateProfile, 
  ForgotPassword, 
  ResetPassword,
  Message,
  Gigs,
  Gig,
  MyGigs,
  Orders,
  Messages,
  Add
} from './components/index.js'
import { Provider } from 'react-redux'  
import store from '../store/store.js'
import Dashboard from './pages/Dashboard.jsx'
import { ToastContainer } from 'react-toastify';
import CreatePost from './pages/Posts/CreatePost.jsx'
import MyPost from './pages/Posts/MyPost.jsx'
import {Post} from './pages/Posts/Post.jsx'
import About from './pages/About.jsx'
import {Apply} from './pages/Posts/Apply.jsx'
import Applications from './pages/Posts/Applications.jsx'
import Profile from './components/Header/User/Profile.jsx'
import ApplicantInfo from './pages/Posts/ApplicantInfo.jsx'
import MyApplication from './components/MyApplication.jsx'
import Team from './components/Team.jsx'
import Search from './components/Search.jsx'
import DeleteAccount from './components/Header/User/UserProfile/DeleteAccount.jsx'
import PNF from './components/MUC/PNF.jsx'
import SearchUser from './components/SearchUser.jsx'
import Pay from './pages/Pay.jsx'
import Success from './components/success/Success.jsx'
import Policy from './pages/Policy.jsx'
import TermAndCondition from './pages/TermAndCondition.jsx'
import Copyright from './pages/Copyright.jsx'
import HIW from './pages/HIW.jsx'
import PublicRoute from './components/ProtectedRoute/PublicRoute.jsx'


const router = createBrowserRouter(
  
  createRoutesFromElements(

      <Route path='/' element={<App/>}>
        <Route path='about' element={<About/>}/>
        <Route path='team' element={<Team/>}/>

        <Route path='contact' element={<Contact/>}/>
        <Route path='how-it-works' element={<HIW/>}/>
        <Route path='*' element={<PNF/>}/>
        <Route path='success' element={<Success/>}/>
        <Route path='privacy-policy' element={
            <Policy/>
        }/>
        <Route path='term-and-conditions' element={
            <TermAndCondition/>
        }/>
        <Route path='copyright' element={
            <Copyright/>
        }/>

        {/* //Public Routes */}
        <Route element={<PublicRoute/>}>
          <Route path='' element={<Home/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='login/forgot-password' element={<ForgotPassword/>}/>
          <Route path='resetpassword/:token' element={<ResetPassword/>}/>
        </Route>

        {/* //Protected Routes */}
        <Route element={<ProtectedRoute/>}>
          <Route path='updateprofile' element={<UpdateProfile/>}/>
          <Route path='userprofile' element={<UserProfile/>}/>
          <Route path='createpost' element={<CreatePost/>}/>
          <Route path='deleteaccount' element={<DeleteAccount/>}/>
          <Route path='myapplication' element={<MyApplication/>}/>
          <Route path='profile/:id' element={<Profile/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='mypost' element={<MyPost/>}/>
          <Route path='post/:postId' element={<Post/>}/>
          <Route path='gigs' element={<Gigs/>}/>
          <Route path='mygigs' element={<MyGigs/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='gig/:id' element={<Gig/>}/>
          <Route path='message/:id' element={<Message/>}/>
          <Route path='messages' element={<Messages/>}/>
          <Route path='add' element={<Add/>}/>
          <Route path='search/:id' element={<Search/>}/>
          <Route path='search_user' element={<SearchUser/>}/>
          <Route path='applications' element={<Applications/>}/>
          <Route path='apply/:id' element={<Apply/>}/>
          <Route path='applicantinfo/:id' element={<ApplicantInfo/>}/>
          <Route path='pay/:id' element={<Pay/>}/>
        </Route>
      
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

