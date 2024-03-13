import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import Button from '../Button'

function Messages() {
  return (
    <section>
        <Container>
            <div className='flex justify-center w-full'>
                <div className='m-12 w-full'>
                    <span className='opacity-60 text-sm'>
                         <Link to="/messages">Messages</Link>  John Doe 
                    </span>
                    <div className='my-7 p-10 flex flex-col gap-5 h-[500px] overflow-y-scroll'>
                        <div className='flex gap-4 max-w-[600px] text-base'>
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className='rounded-full w-12 h-12 object-cover'
                                />
                                <p className='p-4 bg-gray-200 rounded-xl opacity-85'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil accusantium io.
                                </p>
                        </div>
                        <div className='flex flex-row-reverse self-end gap-4 max-w-[600px] text-base'>
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className='rounded-full w-12 h-12 object-cover'
                                />
                                <p className='p-4 bg-blue-400 rounded-xl opacity-85'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil accusantium io.
                                </p>
                        </div>
                        <div className='flex gap-4 max-w-[600px] text-base'>
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className='rounded-full w-12 h-12 object-cover'
                                />
                                <p className='p-4 bg-gray-200 rounded-xl opacity-85'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil accusantium io.
                                </p>
                        </div>
                        <div className='flex flex-row-reverse self-end gap-4 max-w-[600px] text-base'>
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className='rounded-full w-12 h-12 object-cover'
                                />
                                <p className='p-4 bg-blue-400 rounded-xl opacity-85'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil accusantium io.
                                </p>
                        </div>
                        <div className='flex gap-4 max-w-[600px] text-base'>
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className='rounded-full w-12 h-12 object-cover'
                                />
                                <p className='p-4 bg-gray-200 rounded-xl opacity-85'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil accusantium io.
                                </p>
                        </div>
                    </div>
                    <hr className='mb-5 h-0.5 bg-gray-50'/>
                    <div className='flex justify-between items-center'>
                        <textarea color='30' rows='10' className='focus:outline focus:outline-dashed focus:outline-blue-500 p-4 w-[80%] h-16 outline-none border rounded-xl' placeholder='Write a message'></textarea>
                        <Button className='bg-blue-600 p-4 rounded-md w-[15%] text-white'>
                            Send
                        </Button>
                    </div>
                    {/* <p className='opacity-60 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil accusantium io.</p> */}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Messages