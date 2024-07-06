import React, { useEffect, useState } from 'react'
import {Button, Container, Input} from '../../../index.js'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import  Axios  from 'axios'
import { toast } from 'react-toastify'
import { login } from '../../../../../store/authSlice.js'
import {fetchUser} from '../../../../assets/utils/getUser'
import { useNavigate } from 'react-router-dom'
function UpdateProfile() {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const fetchUserData = async() => {
            const response = await fetchUser();
            console.log(response.data)
            setUserData(response.data)
        }
        fetchUserData()
    }, [])
    console.log(userData)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    const handleUpdate = async(data) => {
        console.log(data);
        Axios.defaults.withCredentials = true;
        Axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/update-profile`, data)
        .then(response => {
            toast.success(response.data.message,{
                autoClose:1000
            })
            navigate('/userprofile')
            console.log(response);
            
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
    }
   
  return (
    <section className='w-full'>
        <Container>
            <div className='flex  items-center justify-center h-[80vh]'>
                <div className='sm:w-1/2 w-full'>
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Update {!userData?.isClient ? "Freelancer" : "Client"} Profile</h2>
                    <div className=' mt-8 w-full border-2 rounded-md p-4'>
                        <form className='font-poppins' onSubmit={handleSubmit(handleUpdate)}>
                            {/* profileImg */}
                           
                            <div className='mb-8 w-16 h-16 mx-auto rounded-full  bg-gray-300 p-1'>
                                <img src={userData?.avatar} className='w-full object-cover h-full rounded-full' alt="" />
                            </div>
                            
                            <div className='space-y-3'>
                            <Input {...register('fullName')} placeholder="Enter your name" className="w-full"/>
                            {/* <Input type='email' {...register('email')} placeholder="Enter your email" className="w-full"/> */}
                            {
                                !userData?.isClient && (
                                    <Input {...register('profession')} placeholder="Enter your profession" className="w-full"/>
                                )
                            }
                            </div>
                            <Button type='submit' className='mt-6 w-full rounded-md font-medium py-2 text-white bg-gradient-to-tr from-cyan-500 to-blue-600'>Update Profile</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default UpdateProfile