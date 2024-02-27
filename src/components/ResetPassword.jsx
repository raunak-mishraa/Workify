import React from 'react'
import Container from './container/Container'
import {Input, Button} from './index'
import {useNavigate, useParams} from 'react-router-dom'
import Axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
function ResetPassword() {
    const navigate = useNavigate();
    const accessToken = useParams();

    const {register, handleSubmit} = useForm();
    const resetPassword = async(password) => {

        // console.log(accesstoken)
        console.log(password)
        try {
            console.log(password)
            const response = await Axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/reset-password/`+accessToken.token, password);
            console.log(response);
            if(response.status === 200){
                navigate("/login")
                toast.info("Password reset successfully")
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
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Reset Password</h2>
                    <div className=' mt-8 w-full md:border-2 rounded-md p-4'>
                        <form className='font-poppins space-y-6' onSubmit={handleSubmit(resetPassword)}>
                            <Input  required
                             type='password' 
                             placeholder='New Password'
                             {...register('password')}
                             />
                            <Button type="submit" className='mt-6 w-full rounded-md font-semibold py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>Reset Password</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ResetPassword