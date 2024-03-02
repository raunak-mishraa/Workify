import React from 'react'
import Container from './container/Container'
import Input from './Input'
import { budgetData } from '../assets/Data/budget'
import { categoryData } from '../assets/Data/category'
import Button from './Button'
import { useForm } from 'react-hook-form'
import  Axios  from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm();
  Axios.defaults.withCredentials = true;
  const Post = async (data) => {
    console.log(data)
    try {
      const response = await Axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/createpost`, data,{
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      if(response.data){
        toast.success("Post created successfully",{
          autoClose: 2000,
        })
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error)
    }
  }  
  return (
    <section>
        <Container>
            <div className='flex w-full md:justify-center py-10'>
                <form onSubmit={handleSubmit(Post)} className='font-poppins w-full md:w-2/3 space-y-2'>
                    <h2 className='mb-3 text-xl text-black text-opacity-70 font-semibold ' htmlFor="">Create Post</h2>
                    <Input className="w-full" placeholder="Enter title..." {...register("title")}/>
                    <textarea {...register("description")} placeholder='Description...' className='px-3 py-3  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'  rows={5}></textarea>
                    <div className='space-y-4'>
                      <div className='space-y-2'>
                        <label className='text-black text-opacity-70 font-semibold'>Budget</label>
                        <select {...register("budget")} name='budget'  className=' text-black font-medium text-opacity-50 w-full p-2 border-2'>
                          {
                            budgetData.map((data, index)=>(
                              <option key={index} value={data.budget}>{data.budget}$</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className='space-y-2'>
                      <label className='text-black text-opacity-70 font-semibold'>Category </label>
                      <select {...register("category")} name="category"  className=' text-black font-medium text-opacity-50 w-full p-2 border-2'>
                          {
                            categoryData.map((data, index)=>(
                              <option key={index} value={data.category}>{data.category}</option>
                            
                            ))
                          }
                        </select>
                      </div>
                      <div className='space-y-2'>
                      <label className='block text-black text-opacity-70 font-semibold'>Tags </label>
                          <textarea placeholder='Separate tags with commas' {...register("tags")} className='p-4 w-full border-2 focus:outline-none' name="tags" id="" rows="2"></textarea>
                      </div>
                    </div>
                    <div>
                      <Button type='submit' className='mt-4 w-full py-3 text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 rounded-md hover:from-cyan-600 hover:to-blue-600'>Post</Button>
                    </div>
                </form>
            </div>
        </Container>
    </section>
  )
}

export default CreatePost