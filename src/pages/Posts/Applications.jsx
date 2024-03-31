import React, { useEffect, useState } from 'react'
import { Button, Container } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import  Axios  from 'axios'
import { useDispatch } from 'react-redux'
import { setApplicationData } from '../../../store/applicationSlice'
import newRequest from '../../assets/utils/newRequest'

function Applications() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const clientData = JSON.parse(localStorage.getItem('userData'))
    const [applications, setApplications] = useState([])
    useEffect(()=>{
        Axios.defaults.withCredentials = true;
        Axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/applications/getapplications`)
        .then(res => {
            console.log(res.data.data)
            setApplications(res.data.data)
        })
        .catch(err => console.log(err))
    },[])

    const handleApp = (application) => {
        localStorage.setItem('applicationData', JSON.stringify(application));
        dispatch(setApplicationData(application))
    }

    const handleContact = async(application) => {
        // console.log(clientData.user._id)
        const freelancerId = application;
        const clientId = clientData.user._id;
        const id = freelancerId + clientId;
        console.log(freelancerId, clientId, id)
        try{
            const res = await newRequest.get(`/conversations/single/${id}`);
            navigate(`/message/${res.data.id}`);
            // console.log(res.data, freelancerId, clientId, id)
        }
        catch(err){
            console.log(err.response.status)
            if (err.response.status === 404) {
                const res = await newRequest.post(`/conversations/`, {
                  to: clientData.user.isClient ? freelancerId : clientId,
                });
                navigate(`/message/${res.data.id}`);
              }
        }
        // alert(freelancerId)
    }
  return (
    <section>
        <Container>
        <div className='rounded-md p-6 my-8  bg-gray-100 '>
                <div className='cursor-pointer mx-auto md:w-[70%] space-y-4 w-full'>
                       {
                        applications?.length > 0 ? (
                                applications.map((application, index) => (
                                    <div key={index} className='w-full font-poppins p-6 bg-white rounded-md'>
                                    <div className='flex items-center justify-between'>
                                        <div onClick={(e) => {
                                            e.stopPropagation()
                                            navigate('/profile/1')
                                        }} className='flex items-center gap-2 font-poppins'>
                                            <div>
                                                <img src={application?.userId?.avatar} alt="" className='p-1 border-blue-100 border-2 w-12 h-12 object-cover rounded-full' />
                                            </div>
                                            <div className='leading-1 text-sm'>
                                                <h2 className='first-letter:capitalize font-semibold text-black text-opacity-90 '>{application?.userId?.fullName}</h2>
                                                <h2 className='font-medium text-black text-opacity-70'>{application?.userId?.profession}</h2>
                                            </div>
                                        </div>
                                        <div>
                                            <div onClick={() => {
                                                handleApp(application)
                                                navigate('/applicantinfo')
                                            }} className='border border-blue-100 px-8 p-2  text-black text-opacity-85'>
                                                Details
                                            </div>
                                        </div>
                                        <Button onClick={()=>handleContact(application.userId._id)} className=''>
                                            <i className='w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 top-2 ri-message-line text-black text-opacity-90'></i>
                                        </Button>
                                    </div>
                                   
                                   
                                </div>
                                ))
                        ) 
                        : (
                            <div className='text-xl font-semibold opacity-80 flex justify-center items-center flex-col gap-3'>You don't have any application yet!</div>
                        )
                       }
                </div>
        </div>        
        </Container>
    </section>
  )
}

export default Applications