import React, { useState } from 'react'
import { Container } from './index.js'
import { useSelector } from 'react-redux'
import dashboardImg from '../assets/images/dashboardimg.png'
import { toast } from 'react-toastify'

function FreelancerDashboard() {
  const userData = useSelector((state) => state.auth.userData)
  const [save, setSave] = useState(true)
  const user = {
    avatar:"https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1708687066~exp=1708690666~hmac=1d5e8bac5c16eb53521d1d6bbdeb0e62a9185192cdb4510db89b0b14e664017a&w=740",
    username:"Ketan Yadav",
    title:"We need Environmental photo editors.",
    postTime:"40 Minutes",
    desc:"Please review the attached sample below and only apply if you can make images like these. We want a good graphic designer who can design environmental photos (Like in the sample below. The product image is added in a environment of church) Send your samples while applying to job. Otherwise you proposal will not be rejected.",
    budget:"100$"
  }

  console.log("this is the data",userData)
  return (
    <section className='text-left'>
      <Container>
        <div className='flex gap-6 w-full'>
          <div className='flex justify-between text-left w-4/5 bg-gradient-to-tr rounded-md from-cyan-500 to-blue-600'>
            <div className='p-9'>
              <div className='space-y-2'>
                <h2 className='text-2xl text-white font-poppins font-semibold capitalize'>"Welcome {userData?.user.fullName}"</h2>
                <p className='leading-7 text-xl text-white font-semibold'>Dive into endless opportunities and creative ventures.<br></br> Let your skills shine bright on our platform.</p>
              </div>
                <div className='mt-8 flex bg-white py-2 px-3 border border-gray-200 rounded outline-none w-80'>
                  <input type="search" name="searchValue" id=""  placeholder='Search Jobs' className='outline-none w-full bg-transparent' />
                  <i className="ri-search-line"></i>
                </div>
                </div>
                <div className='w-1/3 relative'>
                  <div className='absolute  left-10 w-2/3 h-4/5 bg-white rounded-full bottom-0'></div>
                    <img src={dashboardImg} className='drop-shadow-md h-full w-full object-cover' alt="" />
                </div>
          </div>
          <div className='text-left p-3 pt-5 w-1/5 rounded-sm bg-gray-50 border-2'>
            <h2 className='font-bold text-black text-opacity-80 font-poppins text-xl'>Why Workify?</h2>
            <div className='space-y-2 mt-2'>
              <p className='font-medium text-black text-opacity-70'><i className="ri-user-3-line w-6 h-6 p-1 rounded-full border-2"></i> Quality Freelancer</p>
              <p className='font-medium text-black text-opacity-70'><i className="ri-wallet-3-line w-6 h-6 p-1 rounded-full border-2"></i> low commission</p>
              <p className='font-medium text-black text-opacity-70'><i className="ri-verified-badge-line w-6 h-6 p-1 rounded-full border-2"></i> Verified client</p>
              <p className='font-medium text-black text-opacity-70'><i className="ri-list-check w-6 h-6 p-1 rounded-full border-2"></i> Job listing</p>
            </div>
          </div>
        </div>
        <div className='mt-8 p-6 pl-0 font-poppins font-medium text-black text-opacity-75'>
          <div>
            <h2>Works you might like</h2>
            <div className='mt-4'>
              <ul className='flex gap-6 text-xs'>
                <li className='text-blue-500 border-b-2 border-blue-500'>
                  <button>Recent</button>
                </li>
                <li>
                  <button>Bookmarked</button>
                </li>
              </ul>
              <div className='mt-8'>
                <div className='p-4 flex gap-3 rounded-md border-2'>
                  <div className=''>
                    <div className='border-2 border-gray-400 p-1 rounded-full w-14 h-14'>
                      <img src={user.avatar} className='w-full object-cover h-full rounded-full' alt="" />
                    </div>
                  </div>

                  <div className='font-poppins pt-2'>
                    <div className='flex justify-between'>
                      <div>
                        <h2 className='font-semibold'>{user.username}</h2>
                        <p className='text-xs'>Posted {user.postTime} ago</p>
                      </div>
                      <div className='flex items-center gap-7'>
                        <h3 className='text-sm'>Budget: {user.budget}</h3>
                        <div>
                        <i onClick={() => {
                          if(save){
                            toast.info("Bookmarked!",{
                              autoClose: 2000,
                              theme:'dark'
                            })
                          }
                          setSave((prev)=>!prev)
                        }
                        } className={`${save ? "ri-bookmark-line" :"ri-bookmark-fill"} text-lg`}></i>
                        </div>
                      </div>
                      
                    </div>
                    <div className='mt-2 font-poppins'>
                      <h2 className='font-semibold text-sm'>{user.title}</h2>
                      <h2 className='font-normal text-black text-opacity-65 text-sm tracking-wide'>{user.desc}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FreelancerDashboard