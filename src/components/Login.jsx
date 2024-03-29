//validations tostify loADINg
import React from 'react'
import Container from './container/Container'
import { Button, Input, googleImg } from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login as loginUser } from '../../store/authSlice'
import { useGoogleLogin } from '@react-oauth/google';
import  axios  from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify"
// import { jwtDecode } from "jwt-decode";
function Login() {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch()
  const [error, setError] = React.useState('')
  // const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);

  axios.defaults.withCredentials = true;
  const login = async(userData) => {  
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/login`, {
          email: userData.email.toLowerCase(),
          password: userData.password
        }
     );
      
      const responseData = response.data.message;
      console.log("login",responseData)
      if(responseData){
        navigate('/dashboard');
        localStorage.setItem('userData', JSON.stringify(responseData));
      }
      if (responseData.accessToken) {
        // const accessToken = responseData.accessToken;
        // const decodedToken = jwtDecode(accessToken);
        
        // Convert token expiry time to Date object
        // let expiryTime = new Date(decodedToken.exp * 1000);
        // console.log(expiryTime);
        
        // Set cookie with expiration time
        // setCookie('accessToken', responseData.accessToken, { 
        //   secure: true, 
        //   sameSite: 'strict', 
        //   httpOnly: true, 
        //   expires: new Date(decodedToken.exp * 1000) // Set cookie expiration time
        // });
        
        // setCookie('refreshToken', responseData.refreshToken, { secure: true, sameSite: 'strict' });

        toast.success("User Logged In!", {
          autoClose: 2000,
        });
        dispatch(loginUser(responseData));
      } 

    } catch (error) {
        toast.error("Invalid user credentials",{
          autoClose: 2000,
          hideProgressBar: true
        })
    }
  }
  
  // const loginWithGoogle = useGoogleLogin({
  //   onSuccess: tokenResponse => console.log(tokenResponse),
  // });
   
  return (
    <section className='font-poppins'>
      <Container>
        <div className='flex text-base items-center justify-center'>
          <div className='flex justify-center flex-col w-full sm:w-96'>
            <h2 className='md:text-2xl opacity-90 font-medium text-center'>Login to your account</h2>
            <div className='flex cursor-pointer gap-2 mt-4 mb-2 w-full justify-center py-3 rounded-full bg-gray-100'>
              <img src={googleImg} alt="googleimage" />
              <button onClick={()=>loginWithGoogle()} className='opacity-70 font-medium'>Sign in with google</button>
            </div>
            <div className='text-center opacity-70'>or</div>
            <form className='w-full' onSubmit={handleSubmit(login)}>
              <div className='space-y-3 mt-2 '>
                <Input 
                label='Email'
                type='email'
                className='pl-4 w-full'
                placeholder='Enter your email'
                {...register('email',{
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                }
                })}
                />
                <Input 
                label='password'
                type='password'
                className='pl-4 w-full'      
                placeholder='Enter your password'
                {...register('password',{
                  required: true
                })}
                />        
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
              </div>
              <Link to='forgot-password' className='relative text-base mt-4 inline-block opacity-80  hover:underline font-medium font-poppins'>Forgot password?</Link>
            <h4 className='mt-6 text-center opacity-60 font-semibold '>Don’t have account?<Link to='/signup' className='underline'>Sign Up</Link></h4>
            <Button type='submit' className='w-full py-3 mt-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full '>
              Login
            </Button>
            
            </form>
            
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Login