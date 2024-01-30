import React from 'react'
import Container from './container/Container'
import { Button, Input, googleImg } from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
function SignUp() {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const [error, setError] = React.useState('')
  const [check, setCheck] = React.useState('freelancer')
  const signUp = async (data) => {
    setError('')
    try {
      
    } catch (error) {
      
    }
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
            <form className='w-full' onSubmit={handleSubmit(signUp)}>
              <div className='space-y-3 mt-2 '>
                <Input
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                    required: true,
                })}
                />
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
                {...register('password')}
                />        
              </div>
              <div className='flex  items-center mt-4 gap-2'>
               
              <label className='text-base inline-block opacity-70 font-medium font-poppins'>Become a {check}</label>
              <label class="relative inline-flex items-center cursor-pointer">
              <input onChange={()=>setCheck(check === 'freelancer' ? 'client' : 'freelancer')} type="checkbox" value="" class="sr-only peer" />
              <div class="w-9 h-5 bg-gray-300  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
              </div>

              
            <h4 className='mt-6 text-center opacity-60 font-semibold '>Already have an account?<Link to='/login' className='underline'>Login</Link></h4>
            <Button 
            type='submit'
            className='w-full py-3 mt-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'>
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