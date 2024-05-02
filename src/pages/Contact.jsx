import React from 'react'
import { Container, ContactImg, Input, Button } from '../components/index'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const SERVICE_ID = "service_kgz7yek";
const TEMPLATE_ID = "template_qxohcyz";
const PUBLIC_KEY = "8Y83ke5_tbz4yPqmE";
function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        toast.success('Message Sent Successfully',{
          autoClose: 2000
        
        })
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };
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
              <form onSubmit={handleOnSubmit} className='mt-4 space-y-4'>
                {/* email js */}
                <Input name="from_name" placeholder='Enter your name' 
                className='w-full' required/>
                <Input name="from_email" placeholder='Enter your email'
                className='w-full' required/>
                <textarea name="message" id="message" rows='6' cols='4' className='px-3 py-3  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'  placeholder='Enter your message...'  required></textarea>
                <Button type='submit' className='w-full py-3 mt-6 text-white bg-gradient-to-tr from-sky-500 to-blue-600 rounded-md'>Submit</Button>
              </form>
            </div>
          </div>
         </div>
      </Container>
    </section>
  )
}

export default Contact