import React from 'react'
import Container from '../container/Container'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ClientDashboard() {
    const userData = useSelector((state) => state.auth.userData)
  return (
    <section>
        <Container>
            <div className='flex py-6 flex-col text-center gap-4 items-center'>
                <div className='w-32 h-32 border-4 border-dashed rounded-full overflow-hidden p-3'>
                    <img src={userData?.user.avatar} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-xl font-bold text-black text-opacity-80 font-poppins leading-3'>"Welcome {userData?.user.username}"</h2>
                    <p className='text-sm font-poppins text-black text-opacity-60 font-semibold'>You are a client</p>
                </div>
                <div >
                    <Link to='/createpost' className='cursor-pointer bg-blue-600 p-2 text-sm text-white rounded-md'>Create Post <i className="ri-add-line"></i></Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ClientDashboard