import React from 'react'
import Container from '../container/Container'
import Button from '../Button'

function Add() {
  return (
    <section>
        <Container>
            <div className="flex justify-between">
                <div className="py-12 w-full">
                    <h1 className='mb-4 opacity-65 font-Roboto text-xl'>Add New Gig</h1>
                    <div className="flex justify-between gap-24">
                    <div className="font-Roboto w-1/2 flex flex-col gap-4 justify-between">
                        <label htmlFor="" className='opacity-80'>Title</label>
                        <input
                        className='p-3 border'
                        type="text"
                        placeholder="e.g. I will do something I'm really good at"
                        />
                        <label htmlFor="" className='opacity-80'>Category</label>
                        <select  
                        className='p-3 border '
                        name="cats" id="cats">
                        <option value="design" className='bg-gray-900 text-white '>Design</option>
                        <option value="web" className='bg-gray-900 text-white '>Web Development</option>
                        <option value="animation" className='bg-gray-900 text-white '>Animation</option>
                        <option value="music" className='bg-gray-900 text-white '>Music</option>
                        </select>
                        <label htmlFor="" className='opacity-80'>Cover Image</label>
                        <input className='p-3' type="file" />
                        <label htmlFor="" className='opacity-80'>Upload Images</label>
                        <input className='p-3' type="file" multiple />
                        <label htmlFor="" className='opacity-80'>Description</label>
                        <textarea className='p-3 border outline-none' name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="10"></textarea>
                        <Button className='p-3 text-white font-medium bg-blue-500 cursor-pointer'>Create</Button>
                    </div>
                    <div className="font-Roboto flex w-1/2 flex-col gap-4">
                        <label htmlFor="" className='opacity-80'>Service Title</label>
                        <input 
                        type="text" 
                        placeholder="e.g. One-page web design"
                        className='p-3 border' />
                        <label htmlFor="" className='opacity-80'>Short Description</label>
                        <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="6" 
                        className='border p-3 outline-none'></textarea>
                        <label htmlFor="" className='opacity-80'>Delivery Time (e.g. 3 days)</label>
                        <input type="number" className='border p-3'/>
                        <label htmlFor="" className='opacity-80'>Revision Number</label>
                        <input type="number" className='border p-3'/>
                        <label htmlFor="" className='opacity-80'>Add Features</label>
                        <input type="text" className='p-3 border' placeholder="e.g. page design" />
                        <input type="text" className='p-3 border' placeholder="e.g. file uploading" />
                        <input type="text" className='p-3 border' placeholder="e.g. setting up a domain" />
                        <input type="text" className='p-3 border' placeholder="e.g. hosting" />
                        <label htmlFor="" className='opacity-80'>Price</label>
                        <input type="number" 
                        className='p-3 border'/>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Add