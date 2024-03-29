import React from 'react'
import Container from './container/Container'
import {Input, Button} from './index'
import Axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
function ForgotPassword() {
    const {register, handleSubmit} = useForm();
    const forgotPassword = async(email) => {
        try {
            console.log(email)
            const response = await Axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/forgot-password`, email);
            // console.log(response);
            if(response.status === 200){
                toast.info("Check your email for reset link")
            }
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <section>
        <Container>
        <div className='flex items-center justify-center h-[60vh]'>
                <div className='w-[100%] lg:w-[40%] md:w-[60%]'>
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Forgot Password</h2>
                    <div className=' mt-8 w-full border-2 rounded-md p-4'>
                        <form className='font-poppins space-y-6' onSubmit={handleSubmit(forgotPassword)}>
                            <Input className='w-full' type='email' placeholder='xyz@gmail.com'  {...register('email',{
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                            }
                            })}/>
                            <Button type='submit' className='mt-6 w-full rounded-md font-semibold py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>Send Reset Link</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ForgotPassword