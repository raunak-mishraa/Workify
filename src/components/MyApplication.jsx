import React, { useEffect, useState } from 'react'
import Container from './container/Container'
import  axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function MyApplication() {
    const [loading, setLoading] = useState(true)
    // Axios.defaults.withCredentials = true;
    const [applicationData, setApplicationData] = useState([])
    useEffect(() => {
         axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/applications/myapplications`,{
            headers:{
                application: 'application/json',
            },
            withCredentials: true
         })
         .then((res) => {
              setLoading(false)
              setApplicationData(res.data.data)
         })
         .catch((err) => console.log(err))
       
    }, [])
     console.log(applicationData)
     
    const handleDeleteApplication = (id) => {
        console.log(id)
        axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/applications/deleteapplication/${id}`,{
            headers:{
                'Content-Type': 'application/json',
            },
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data)
            setApplicationData(applicationData.filter((post) => post._id !== id))
        })
        .catch((err)=>{
            toast.error('Something went wrong')
        })
    }
  return (
    <section>
        <Container>
        <div className='rounded-md sm:p-6 p-3 my-8  bg-gray-50 '>
                <div className='cursor-pointer mx-auto md:w-[70%] space-y-4 w-full'>
                {loading && (
                    <div className='space-y-4'>
                        <div className='bg-white animate-pulse p-4 space-y-2 relative'>
                            <div className='bg-gray-200 w-24 h-4 ropunded'></div>
                            <div className='bg-gray-200 w-36 h-4 rounded'></div>
                            <div className='bg-gray-200 w-48 h-4 rounded'></div>
                            <div className='absolute top-1 right-2 bg-gray-200 w-6 h-6 rounded'></div>
                        </div>
                        <div className='bg-white animate-pulse p-4 space-y-2 relative'>
                            <div className='bg-gray-200 w-24 h-4 ropunded'></div>
                            <div className='bg-gray-200 w-36 h-4 rounded'></div>
                            <div className='bg-gray-200 w-48 h-4 rounded'></div>
                            <div className='absolute top-1 right-2 bg-gray-200 w-6 h-6 rounded'></div>
                        </div>
                    </div>
                )}
                {
                    !loading && (applicationData.length > 0 
                    ? applicationData.map((application, index) => 
                        application.postId && (
                            <div key={index} className='relative w-full font-poppins p-6 bg-white rounded-md'>
                            <h2 className='text-lg font-semibold text-black text-opacity-70 first-letter:capitalize'>{application?.postId?.title}</h2>
                           <div className='overflow-hidden'>
                             <p className='line-clamp-4 leading-normal text-sm font-medium text-black text-opacity-50'>{application?.postId?.description}</p>
                           </div>
                           <div className='mt-2 flex items-center text-sm font-medium gap-4'>
                            <h3 className='text-opacity-80 text-black'>Budget</h3>
                             <p className=' font-medium text-black text-opacity-50'>{application?.postId?.budget}$</p>
                           </div>
                            <i className='absolute right-3 w-8 h-8 flex justify-center items-center rounded-full bg-gray-100 top-2 ri-delete-bin-5-line text-black text-opacity-90' onClick={()=>handleDeleteApplication(application._id)}></i>
                        </div>
                        )
                    )
                    :(<div className='flex justify-center items-center flex-col gap-3'>
                        <div className='w-10 h-10 flex justify-center items-center rounded-full opacity-35 border-2 border-gray-950'>
                            <i class="ri-pencil-fill"></i>
                        </div>
                        <h1 className='text-center font-poppins text-black text-opacity-70 font-bold text-xl'>You Don't Have Applied on any application</h1>
                        <Link to='/dashboard' className='cursor-pointer border-2 border-gray-400 p-2 text-base text-black font-semibold text-opacity-70  rounded-md'>Find post here <i className="ri-find-line"></i></Link>
                    </div>))
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MyApplication