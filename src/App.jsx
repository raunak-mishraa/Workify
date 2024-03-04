// import Header from './components/Header/Header'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, updateUserAvatar } from '../store/authSlice'
import { selectPost } from '../store/postSlice'
import 'react-toastify/dist/ReactToastify.css';
import { setApplicationData } from '../store/applicationSlice';
function App() {
  const dispatch = useDispatch()
  const userData = localStorage.getItem('userData');
  const selectedPostData = localStorage.getItem('selectedPostData');
  const applicationData = localStorage.getItem('applicationData');
// console.log(userData)
  // Check if user data exists in local storage
  useEffect(() => {
    if (selectedPostData) {
      dispatch(selectPost(JSON.parse(selectedPostData)));
    }
  },[dispatch, selectedPostData])

  useEffect(() => {
    if (userData) {
      const userDataObj = userData;
      dispatch(login(JSON.parse(userDataObj)));
    }
  }, [dispatch, userData]);
  
  useEffect(() => {
    if (applicationData) {
      dispatch(setApplicationData(JSON.parse(applicationData)));
    }
  }, [applicationData]);

  return (
    <>
    <Header/>
      <main>
      <Outlet/>
      </main>
    <Footer/>
    </>
  )
}

export default App
