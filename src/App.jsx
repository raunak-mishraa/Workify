// import Header from './components/Header/Header'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice'
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import PageLoader from './components/MUC/PageLoader';


function App() {
  const queryClient = new QueryClient()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const isClient = useSelector((state) => state.auth.isClient)
  console.log(isClient,"app")
  const isLoggedIn = localStorage.getItem('isLoggedIn');


  window.onload = () => {
    setLoading(false);
  };
  useEffect(() => {
    if (isLoggedIn) {
      const clientStatus = JSON.parse(localStorage.getItem('isClient'));
      dispatch(login(clientStatus));
    }
  }, [dispatch, isLoggedIn]);
  

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
