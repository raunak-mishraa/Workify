import React from 'react'
import Container from './container/Container'
import Input from './Input'

function CreatePost() {
  return (
    <section>
        <Container>
            <div className='flex justify-center py-10'>
                <form action="" className='font-poppins w-2/3 space-y-2'>
                    <label className='mb-3 text-xl text-black text-opacity-70 font-semibold ' htmlFor="">Create Post</label>
                    <Input placeholder="Enter title..."/>
                    <textarea placeholder='Description...' className='px-3 py-3  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' name="" id="" ></textarea>
                </form>
            </div>
        </Container>
    </section>
  )
}

export default CreatePost