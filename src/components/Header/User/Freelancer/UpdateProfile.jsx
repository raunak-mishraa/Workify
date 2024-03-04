import React, { useEffect } from 'react'
import {Button, Container, Input} from '../../../index.js'
// import PrevImage from "../../../../assets/images/author.jpg"
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import  Axios  from 'axios'
function UpdateProfile() {
    const userData = useSelector((state) => state.auth.userData)
    const { register, handleSubmit } = useForm();
    // const data = {
    //     username: 'John Doe',
    //     email: 'xyz@gmail.com',
    //     profession: 'Web Developer'
    // }
    const [username, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [profession, setProfession] = React.useState("");
    // useEffect(() => {
    //     Axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/profile`)
    // },[])

    const handleUpdate = async(data) => {
        console.log(data);
        Axios.defaults.withCredentials = true;
        Axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/update-profile`, data)
        .then(response => {
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
                <div className='w-1/2'>
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Update Freelancer Profile</h2>
                    <div className=' mt-8 w-full border-2 rounded-md p-4'>
                        <form className='font-poppins' onSubmit={handleSubmit(handleUpdate)}>
                            {/* profileImg */}
                           
                            <div className='mb-8 w-16 h-16 mx-auto rounded-full  bg-gray-300 p-1'>
                                <img src={userData?.user.avatar} className='w-full object-cover h-full rounded-full' alt="" />
                            </div>
                            
                            <div className='space-y-3'>
                            <Input {...register('fullName')} placeholder="Enter your name" className="w-full"/>
                            <Input type='email' {...register('email')} placeholder="Enter your email" className="w-full"/>
                            <Input {...register('profession')} placeholder="Your profession" className="w-full" />
                            </div>
                            <Button type='submit' className='mt-6 w-full rounded-md font-semibold py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>Update Profile</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default UpdateProfile