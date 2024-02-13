import React from 'react'
import Container from './container/Container'
import { Button, Input, googleImg } from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
function Login() {
  const navigate = useNavigate()
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [error, setError] = React.useState('')

  // const login = async (data) => {
  //   console.log(data)
  //   setError('')
  //   try {
      
  //   } catch (error) {
      
  //   }
  // }
  const login = (data) => {  
    console.log(data);
   };
  return (
    <section className='font-poppins'>
      <Container>
        <div className='flex text-base items-center justify-center'>
          <div className='flex justify-center flex-col w-full sm:w-96'>
            <h2 className='md:text-2xl opacity-90 font-medium text-center'>Login to your account</h2>
            <div className='flex cursor-pointer gap-2 mt-4 mb-2 w-full justify-center py-3 rounded-full bg-slate-100'>
              <img src={googleImg} alt="googleimage" />
              <span className='opacity-70 font-medium'>Sign in with google</span>
            </div>
            <div className='text-center opacity-70'>or</div>
            <form className='w-full' onSubmit={handleSubmit(login)}>
              <div className='space-y-3 mt-2 '>
                <Input 
                label='Email'
                type='email'
                className='pl-4'
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
                className='pl-4'      
                placeholder='Enter your password'
                {...register('password',{
                  required: true
                })}
                />        
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
              </div>
              <Link to='/forgot-password' className='relative text-base mt-4 inline-block opacity-80  hover:underline font-medium font-poppins'>Forgot password?</Link>
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