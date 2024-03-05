import React from 'react'
import Container from '../../../container/Container'
import { useForm } from 'react-hook-form'
import Button from '../../../Button'
import Input from '../../../Input'
import  Axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { logout } from '../../../../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function DeleteAccount() {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const deleteAccount = (data) => {
        // if(password.password !== "" ){
        //     console.log(password)
        // }
       
        if(data.password !== "" ){
            Axios.defaults.withCredentials = true
            Axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/delete-account`, {data})
            .then((res)=>{
                toast.success(res.data.message)
                navigate("/")
                localStorage.removeItem('userData');
                dispatch(logout());  
            })
            .catch((err)=>{
                console.log(err)
                toast.error("Error deleting account")
            })
        }
        else toast.error('Please enter your password')
            
    }
  return (
    <section>
        <Container>
        <div className='flex items-center justify-center h-[60vh]'>
                <div className='w-[100%] lg:w-[40%] md:w-[60%]'>
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Delete My Account!</h2>
                    <div className=' mt-8 w-full border-2 rounded-md p-4'>
                        <form className='font-poppins space-y-6' onSubmit={handleSubmit(deleteAccount)}>
                            <Input placeholder="Enter your password" {...register('password')} className='w-full'/>
                            <Button type='submit' className='mt-6 w-full rounded-md font-semibold py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 active:scale-95'>Delete</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default DeleteAccount