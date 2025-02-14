import React from 'react'
import Container from './container/Container'
import RaunakImage from '../assets/images/author.jpg'
// import KetanImage from '../assets/images/ketan.jpg'
import zaidImage from '../../assets/images/zaid.jpeg'
import AkashImage from '../assets/images/aakash.jpg'
function Team() {
  return (
    <section>
        <Container>
            <div>
               <div className='space-y-2  text-black font-poppins  mt-8'>
                <h1 className="text-3xl font-semibold  text-black text-opacity-80">Our Team</h1>
                  <p className='text-black text-opacity-60'>At Workify, our team members are the driving force behind every innovation and success. Their diverse expertise, dedication, and collaborative spirit ensure that Workify remains at the forefront of delivering exceptional solutions to our users, shaping the future of work one keystroke at a time.</p>
               </div>
              <div className='py-10 flex flex-wrap gap-4 w-full justify-between'>
              <div className='sm:w-1/4 w-full space-y-1 overflow-hidden relative bg-white border p-4  rounded-2xl'>
                <div className=' flex justify-center items-center h-auto p-4 rounded-full'>
                  
                  <div className='absolute right-0 top-0 w-10 h-10 bg-blue-700 rounded-bl-sm'></div>
                  <div>
                    <img src={RaunakImage} className='w-28 h-28 object-cover rounded-full border-2 p-1 overflow-hidden'/>
                  </div>
                </div>
                <div className=' border flex justify-center items-center h-auto p-4 '>
                  <div className='text-center'>
                    <h3 className='font-semibold text-black text-opacity-85'>Raunak Mishra</h3>
                    <p className='line-clamp-1 font-medium text-sm text-black text-opacity-60'>MERN Stack Developer, UI/UX Designer</p>
                  </div>
                </div>
                <div className='border flex justify-center items-center h-auto p-4 '>
                  <div className='flex justify-center gap-5 text-lg'>
                    <i className='ri-instagram-line'></i>
                    <i className='ri-twitter-line'></i>
                    <i className='ri-linkedin-line'></i>
                  </div>
                </div>
               </div>
              <div className='sm:w-1/4 w-full space-y-1 overflow-hidden relative bg-white border p-4  rounded-2xl'>
                <div className=' flex justify-center items-center h-auto p-4 rounded-full'>
                <div className='absolute right-0 top-0 w-10 h-10 bg-blue-700 rounded-bl-sm'></div>
                  <div>
                    <img src={zaidImage} className='w-28 h-28 object-cover rounded-full border-2 p-1 overflow-hidden'/>
                  </div>
                </div>
                <div className=' border flex justify-center items-center h-auto p-4 '>
                  <div className='text-center'>
                    <h3 className='font-semibold text-black text-opacity-85'>Zaid Rahman</h3>
                    <p className='font-medium text-sm text-black text-opacity-60'>Full Stack Developer</p>
                  </div>
                </div>
                <div className=' border flex justify-center items-center h-auto p-4 '>
                  <div className='flex justify-center  gap-5 text-lg'>
                    <i className='ri-instagram-line'></i>
                    <i className='ri-twitter-line'></i>
                    <i className='ri-linkedin-line'></i>
                  </div>
                </div>
               </div>
              <div className='sm:w-1/4 w-full  space-y-1 relative overflow-hidden bg-white border p-4  rounded-2xl'>
                <div className=' flex justify-center items-center h-auto p-4 rounded-full'>
                <div className='absolute right-0 top-0 w-10 h-10 bg-blue-700 rounded-bl-sm'></div>
                  <div>
                    <img src={AkashImage} className='w-28 h-28 object-cover rounded-full border-2  p-1 overflow-hidden'/>
                  </div>
                </div>
                <div className='text-center border flex justify-center items-center h-auto p-4 '>
                  <div>
                    <h3 className='font-semibold text-black text-opacity-85'>Akash Pandey</h3>
                    <p className='font-medium text-sm text-black text-opacity-60'>Frontend Developer</p>
                  </div>
                </div>
                <div className=' border flex justify-center items-center h-auto p-4 '>
                  <div className='flex justify-center gap-5 text-lg'>
                    <i className='ri-instagram-line'></i>
                    <i className='ri-twitter-line'></i>
                    <i className='ri-linkedin-line'></i>
                  </div>
                </div>
               </div>
             
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Team