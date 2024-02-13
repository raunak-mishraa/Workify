import React, { useState } from 'react'
import authorImg from '../../../assets/images/author.jpg'
function User() {
    const [isFreelancer, setIsFreelancer] = useState(true)
    const [open, setOpen] = useState(false)

  return (
    <div className='md:flex gap-6 hidden'> 
        <div className='flex py-2 px-3 border border-gray-200 rounded outline-none max-w-xl'>
            <input type="search" name="searchValue" id=""  placeholder='Search Jobs' className='outline-none' />
            <i className="ri-search-line"></i>
        </div>
        <div className='md:flex items-center gap-2 hidden'>
        <div>
            <div className='relative w-8 h-8 bg-gray-100 rounded-full items-center justify-center flex'> <i className=" ri-notification-3-line"></i>
            <div className='absolute right-2 top-2 w-2 h-2 bg-yellow-300 rounded-full'></div>
            </div>
        </div>
        <div className='relative'>
        <div onClick={() =>setOpen((prev)=>!prev)} className='rounded-full flex items-center justify-center w-8 h-8  overflow-hidden'>
            {/* <i className=" ri-user-line"></i> */}
            <img className='w-full' src={authorImg} alt="profile" />
        </div>
        <div className={`absolute right-0 top-13 z-10  py-2 ${open ? 'block' : 'hidden'} `}>
        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
            <div className='text-base mt-3 rounded-md bg-white border border-gray-200 overflow-hidden'>
                <div className='hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                    <i className="ri-user-line"></i> Profile
                </div>
                <div className='hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                    <i className="ri-message-line"></i> Messages
                </div>
                
                <hr />
                <div className='hover:bg-blue-200 py-1 mt-3 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                <i className="ri-logout-box-r-line"></i> Logout
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default User