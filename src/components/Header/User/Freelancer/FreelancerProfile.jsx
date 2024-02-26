import React from 'react'
import { Container} from "../../../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function FreelancerProfile() {
    const userData = useSelector((state) => state.auth.userData)
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
                            <img src={userData?.user.avatar} alt="profile" className='w-full h-full  object-cover rounded-full'/>
                        </div>
                        <div className=' opacity-85'>
                            <h2 className='text-xl font-semibold'>{userData?.user.fullName}
                            <i class="ri-verified-badge-fill ml-1 text-base text-cyan-600"></i>
                            </h2>
                            <h2 className='font-medium text-sm'>{userData?.user.profession}</h2>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className='p-2 border-2 rounded-md'>
                            <h2 className='font-medium opacity-70'>Skills</h2>
                        </div>
                        <div className='p-2 border-2 rounded-md'>
                            <h2 className='font-medium opacity-70'>Certification</h2>
                        </div>
                        <div className='p-2 border-2 rounded-md'>
                            <h2 className='font-medium opacity-70'>Projects</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            <div className='w-5/6 p-4'>
                <h2 className='text-2xl font-semibold opacity-80'>Profile Info</h2>
                <div className=' mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200 relative'>
                    <h2 className='text-lg '>Account</h2>
                   <div className='space-y-3 mt-2 font-assistant text-base'>
                        <div>
                            <label className='font-semibold'>Name</label>
                            <h3 className='mt-1 font-semibold '>{userData?.user.fullName}</h3>
                        </div>
                        <div>
                            <label className=' font-semibold'>Email</label>
                            <h3 className=' mt-1  font-semibold'>{userData?.user.email}</h3>
                        </div>
                   </div>
                   <div className='absolute right-4 border-2 w-8 h-8 rounded-full flex justify-center items-center  top-3'>
                    <Link to='/updatefreelancerprofile'><i className='ri-pencil-fill text-blue-400'></i></Link>
                    
                   </div>
                </div>
            </div>
          </div>
        </Container>
    </section>
  )
}

export default FreelancerProfile