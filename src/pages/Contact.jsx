import React from 'react'
import { Container, ContactImg, Input, Button } from '../components/index'

function Contact() {
  return (
    <section className='min-h-[90%] py-4 w-full flex items-center justify-center'>
      <Container>
         <div className='flex flex-wrap sm:rounded-[30px] sm:h-[75vh] py-8 sm:p-0  justify-center items-center overflow-hidden'>
          <div className='md:w-1/2 h-full hidden md:block object-center'>
            <img src={ContactImg} className=' w-full h-full object-cover' alt="" />
          </div>
          <div className='md:w-1/2 w-full flex h-full items-center sm:px-10'>
            <div className='sm:p-4 rounded-lg w-full'>
              <h3 className="text-2xl font-semibold  text-black text-opacity-80">Send us a message</h3>
              <form action="" className='mt-4 space-y-4'>
                {/* email js */}
                <Input placeholder='Enter your name' 
                className='w-full'/>
                <Input placeholder='Enter your email'
                className='w-full'/>
                <textarea name="" id="message" rows='6' cols='4' className='px-3 py-3  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' placeholder='Enter your message...'></textarea>
                <Button className='w-full py-3 mt-6 text-white bg-gradient-to-tr from-sky-500 to-blue-600 rounded-md'>Submit</Button>
              </form>
            </div>
          </div>
         </div>
      </Container>
    </section>
  )
}

export default Contact