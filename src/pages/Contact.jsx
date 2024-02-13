import React from 'react'
import { Container, ContactImg, Input, Button } from '../components/index'

function Contact() {
  return (
    <section className='py-4 w-full h-full flex items-center justify-center'>
      <Container>
         <div className='flex flex-wrap rounded-[30px] h-[85vh]  justify-center items-center overflow-hidden'>
          <div className='md:w-1/2 h-full hidden md:block object-center'>
            <img src={ContactImg} className=' w-full object-center' alt="" />
          </div>
          <div className='md:w-1/2 flex h-full items-center px-10'>
            <div className=' p-4 rounded-lg w-full'>
              <h3 className='text-2xl font-semibold'>Send us a message</h3>
              <form action="" className='mt-4 space-y-4'>
                {/* email js */}
                <Input placeholder='Enter your name' />
                <Input placeholder='Enter your email'/>
                <textarea name="" id="message" rows='6' cols='4' className='px-3 py-3  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' placeholder='Enter your message...'></textarea>
                <Button className='w-full py-3 mt-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>Submit</Button>
              </form>
            </div>
          </div>
         </div>
      </Container>
    </section>
  )
}

export default Contact