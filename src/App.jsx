import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch()
  const userData = localStorage.getItem('userData');
// console.log(userData)
  // Check if user data exists in local storage
  useEffect(() => {
    if (userData) {
      dispatch(login(JSON.parse(userData)));
    }
  }, []);
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
