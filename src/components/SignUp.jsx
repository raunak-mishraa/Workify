import React, { useEffect, useState } from 'react'
import Container from './container/Container'
import { Button, Input, googleImg } from './index'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
// import {login} from '../../store/authSlice'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify"

function SignUp() {
  const navigate = useNavigate()
  const [file, setFile] = React.useState(null)
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    email:"",
    password:"",
    avatar:"",
    isClient: false
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('fullName', user.fullName);
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('isClient', user.isClient);
    formData.append('avatar', file); // Append the avatar file
    
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // console.log(response.data);
      const responseData = response.data;
      if(responseData){
        toast.success("Successefully Registered!");        
      }
      // Handle successful signup response
      // if(responseData) dispatch(login(responseData)); // Dispatch action to update authentication state
      navigate('/login'); // Redirect to dashboard or any other page
    } catch (error) {
      console.log("register", error.message);
    }
  }
  

  // console.log(user)

  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleClient = (e) =>{
    setUser((prev) => {
      return { ...prev, isClient:e.target.checked }
    })
  }

  return (
    <section className='font-poppins'>
      <Container>
        <div className='flex text-base items-center justify-center'>
          <div className='flex justify-center flex-col w-full sm:w-96'>
            <h2 className='md:text-2xl opacity-90 font-medium text-center'>Create new account</h2>
            <div className='flex cursor-pointer gap-2 mt-4 mb-2 w-full justify-center py-3 rounded-full bg-slate-100'>
              <img src={googleImg} alt="googleimage" />
              <span className='opacity-70 font-medium'>Sign in with google</span>
            </div>
            <div className='text-center opacity-70'>or</div>
           
            <form className='w-full' onSubmit={handleSubmit}>
              <div className='space-y-3 mt-2 '>
                <Input
                label="FullName: "
                className='pl-4'
                name="fullName" 
                placeholder="Enter your FullName"
                value={user.fullName}
                // {...register("fullName", {
                //     required: true,
                // })}
                onChange={handleChange}
                />
                <Input
                label="Username: "
                className='pl-4' 
                name="username"
                placeholder="Enter your username"
                value={user.username}
                // {...register("username", {
                //     required: true,
                // })}
                onChange={handleChange}
                />
                <Input 
                label='Email'
                type='email'
                name="email"
                className='pl-4'
                value={user.email}
                placeholder='Enter your email'
                onChange={handleChange}
                // {...register('email',{
                //   required: true,
                //   validate: {
                //     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                //   }
                // })}
                />
                <Input 
                label='password'
                type='password'
                className='pl-4'
                name="password"  
                value={user.password}
                placeholder='Enter your password'
                // {...register('password',
                // {
                //   required: true,
                //   minLength: 6
                // }
                // )}
                onChange={handleChange}
                />   
                <div className='text-xs '>
                <input type="file" className='opacity-85 pl-4 font-medium font-poppins px-3 py-3  rounded-lg bg-white text-gray-700 outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' 
                // {...register("picture", {
                //   required: "Recipe picture is required",
                // })}
                onChange={(e) => setFile(e.target.files[0])} 
                />
              </div>     
              </div>
              <div className='flex items-center mt-4 gap-2'>
               
              <label className='text-base inline-block opacity-70 font-medium font-poppins'>Become a Freelancer</label>
              <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" onChange={handleClient} className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-300  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
              </div>
              
              
            <h4 className='mt-6 text-center opacity-60 font-semibold '>Already have an account?<Link to='/login' className='underline'>Login</Link></h4>
            <Button 
            type='submit'
            className='w-full py-3 mt-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full active:bg-gradient-to-l active:from-cyan-500 active:to-blue-500'>
              SignUp
            </Button>
            </form>
           
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SignUp