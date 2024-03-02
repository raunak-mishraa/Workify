import React from 'react'
import Container from './container/Container'

function Team() {
  return (
    <section className='bg-gray-100 py-12'>
        <Container>
            <div className='text-center'>
                <h2 className='text-4xl font-bold text-black'>Our Awesome Team</h2>
                <p className='text-lg text-gray-700 mt-2'>Meet the incredible people behind our success</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    <img src="https://via.placeholder.com/300" alt="John Doe" className='w-full h-64 object-cover'/>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold text-gray-800'>John Doe</h2>
                        <p className='text-sm text-gray-600 mt-2'>CEO</p>
                        <div className='mt-4'>
                            <a href='#' className='text-blue-500 hover:text-blue-600 font-medium'>View Profile</a>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    <img src="https://via.placeholder.com/300" alt="Jane Doe" className='w-full h-64 object-cover'/>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold text-gray-800'>Jane Doe</h2>
                        <p className='text-sm text-gray-600 mt-2'>CTO</p>
                        <div className='mt-4'>
                            <a href='#' className='text-blue-500 hover:text-blue-600 font-medium'>View Profile</a>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    <img src="https://via.placeholder.com/300" alt="Bob Smith" className='w-full h-64 object-cover'/>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold text-gray-800'>Bob Smith</h2>
                        <p className='text-sm text-gray-600 mt-2'>Lead Designer</p>
                        <div className='mt-4'>
                            <a href='#' className='text-blue-500 hover:text-blue-600 font-medium'>View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Team
