import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from '../../container/Container'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Profile() {
    const [userData, setUserData] = useState()
    const [tabs, setTabs] = React.useState('profile')

    const {id}= useParams()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/${id}`, { withCredentials: true })
        .then((res)=>{
            console.log(res.data)
            setUserData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    // console.log("this is profile page", userData)
    
    // console.log("this is the data",userData)
    // const userData = {user:{ fullName: 'John Doe',
    // email: 'xyz@gmail.com',
    // avatar: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&uid=R117610733&ga=GA1.1.1393354656.1695382104&semt=sph',
    // profession: 'Web Developer'}
       
    // }
  return (
    <section className='max-w-6xl mx-auto font-poppins h-[60vh] flex justify-center items-center'>
        <Container>
        <div className='flex justify-center h-full'>
        <div className='w-2/6 '>
            <div className='h-auto border-2 rounded-md p-4 border-gray-200 '>
                <div className=' flex flex-col gap-6 justify-center'>
                    {/* profile_url */}
                    <div className='flex gap-2 items-center '>
                        <div className='w-16 h-16'>
                            <img src={userData?.avatar} alt="profile" className='w-full h-full  object-cover rounded-full'/>
                        </div>
                        <div className=' opacity-85'>
                            <h2 className='text-xl font-semibold lowercase'>{userData?.fullName}
                            {userData?.isVerified === true && <i className="ri-verified-badge-fill ml-1 text-base text-cyan-600"></i>}
                            </h2>
                            <h2 className='font-medium text-sm'>{userData?.profession}</h2>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className={`${tabs === 'profile'  && 'bg-gray-100 text-opacity-90'} text-black cursor-pointer p-2 border-2 rounded-md text-opacity-75`} onClick={()=>setTabs('profile')}>
                            <h2 className='font-medium '>Profile</h2>
                        </div>
                        <div className={`${tabs === 'skills'  && 'bg-gray-100 text-opacity-90'} text-black cursor-pointer p-2 border-2 rounded-md text-opacity-75`} onClick={()=>setTabs('skills')}>
                            <h2 className='font-medium'>Skills</h2>
                        </div>
                        <div className={`${tabs === 'projects'  && 'bg-gray-100 text-opacity-90'} text-black cursor-pointer p-2 border-2 rounded-md text-opacity-75`} onClick={()=>setTabs('projects')}>
                            <h2 className='font-medium'>Projects</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {
                    tabs === 'profile' && (
                        <div className='sm:w-5/6 p-4 w-full'>
                    <h2 className='text-2xl font-semibold opacity-80'>Profile Info <span className='opacity-80 text-base'>({userData?.username})</span></h2>
                    <div className=' mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200 relative'>
                        <h2 className='text-lg '>Account</h2>
                    <div className='space-y-3 mt-2 font-assistant text-base'>
                            <div>
                                <label className='font-semibold'>Name</label>
                                <h3 className='mt-1 font-semibold '>{userData?.fullName}</h3>
                            </div>
                            <div>
                                <label className=' font-semibold'>Email</label>
                                <h3 className=' mt-1  font-semibold'>{userData?.email}</h3>
                            </div>
                    </div>
                    
                    </div>

                    

                </div>
                    )
                }
                {
                    tabs === 'skills' && (
                        <div className='sm:w-5/6 p-4 w-full'>
                    <h2 className='text-2xl font-semibold opacity-80'>Skills</h2>
                    <div className='space-y-6 mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200'>
                 
                        <div className='space-y-4'>
                            <h2 className='text-lg'>Your skills</h2>
                            <div className='space-y-3 font-poppins text-base'>
                                    {userData?.skills?.length > 0 ? (<div className='border-2 p-4 rounded-md flex flex-wrap gap-2'>
                                    {userData?.skills?.map(skill =>(
                                        <span key={skill} className='text-xs p-2 rounded-lg bg-gray-100'>{skill} </span>
                                    ))}
                             </div>): (<div className='text-lg font-semibold opacity-80'>No skills added yet!</div>)}
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                }
             {
                    tabs === 'projects' && (
                        <div className='sm:w-5/6 p-4 w-full'>
                    <h2 className='text-2xl font-semibold opacity-80'>Projects</h2>
                    <div className='space-y-6 mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200'>
                        
                        <div className='space-y-4'>
                            <h2 className='text-lg '>Your projects <span className='text-sm'>(3 projects are required to get verified)</span> </h2>
                        <div className='flex flex-wrap gap-4 justify-between'>
                            
                            {
                                userData?.projects.map(project => 
                                    (
                                        <div key={project?._id} className='w-full flex items-center p-2 px-4 rounded-lg justify-between font-poppins  bg-gray-100'>
                                            <div className='first-letter:capitalize font-bold text-black text-opacity-85 sm:text-base text-sm'>{project?.title}</div>
                                            <div className='hidden sm:flex items-center gap-3 '>
                                                <div className='cursor-pointer text-white p-2 bg-black font-poppins w-20 text-center rounded-md font-medium'>Delete</div>
                                                <Link to={project?.projectUrl}  className='cursor-pointer text-black p-2 bg-gray-50 border-2 font-poppins w-20 text-center rounded-md font-medium'>Show</Link>
                                            </div>
                                            <div className='sm:hidden space-x-1'>
                                                <i className='ri-eye-line w-24 h-24 p-1 rounded-full bg-black text-white text-sm'></i>
                                                <i className="ri-delete-bin-6-line w-24 h-24 p-1 rounded-full bg-blue-500 text-white text-sm"></i>
                                            </div>
                                        </div>
                                        )
                                )
                            }
                                
                        </div>
                        </div>
                    </div>
                </div>
                    )
                }
          </div>
        </Container>
    </section>
  )
}

export default Profile