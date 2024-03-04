import React from 'react'
import Container from './container/Container'

function Search() {
  return (
    <section>
        <Container>
            <div className='rounded-md p-6 my-8  bg-gray-100 '>
                <div className='flex justify-around font-poppins flex-wrap'>
                    <div className=' w-1/3 p-4 gap-2 items-center bg-white rounded-md flex'>
                       <div>
                            <img src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg?t=st=1709465481~exp=1709469081~hmac=27e66189cb0ee149654a95a08275ceb8e8da332822f998b4baf8392320521aac&w=996" alt="client_profile" className='w-20 h-20 p-1 border-2 rounded-md object-cover' />
                       </div>
                       <div>
                            <h2 className='text-xl font-bold font-poppins opacity-85'>John Doe</h2>
                            <p className='text-sm font-medium opacity-75'>Web Developer</p>
                       </div>
                    </div>
                    <div className='w-1/3 p-4 gap-2 items-center bg-white rounded-md flex'>
                       <div>
                            <img src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg?t=st=1709465481~exp=1709469081~hmac=27e66189cb0ee149654a95a08275ceb8e8da332822f998b4baf8392320521aac&w=996" alt="client_profile" className='w-20 h-20 p-1 border-2 rounded-md object-cover' />
                       </div>
                       <div>
                            <h2 className='text-xl font-bold font-poppins opacity-85'>John Doe</h2>
                            <p className='text-sm font-medium opacity-75'>Web Developer</p>
                       </div>
                    </div>
                 
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Search