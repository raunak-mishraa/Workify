// import Header from './components/Header/Header'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, updateUserAvatar } from '../store/authSlice'
import { selectPost } from '../store/postSlice'
import 'react-toastify/dist/ReactToastify.css';
import { setApplicationData } from '../store/applicationSlice';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import PageLoader from './components/MUC/PageLoader';


function App() {
  const queryClient = new QueryClient()
  const dispatch = useDispatch()
  const userData = localStorage.getItem('userData');
  const selectedPostData = localStorage.getItem('selectedPostData');
  const applicationData = localStorage.getItem('applicationData');
  const [loading, setLoading] = useState(true);

  window.onload = () => {
    setLoading(false);
  };

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
    <QueryClientProvider client={queryClient}>
    {
      loading ? <PageLoader/> : (
        <>
          <Header/>
          <main>
          <Outlet/>
          </main>
          <Footer/>
        </>
      )
    }
    </QueryClientProvider>
  )
}

export default App
